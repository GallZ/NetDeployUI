# NetDeployUI v1.6 — Technical Documentation

## 1. Executive Summary
NetDeployUI is a lightweight, cross-platform utility framework built on React 18, Vite, and Tailwind CSS. It streamlines rapid edge-switch configuration deployments by generating structured, error-free CLI blocks for major network operating systems (Cisco IOS, ArubaOS-CX, Huawei VRP, and Juniper Junos).

## 2. Core Functional Modules
The application layout is divided into three distinct structural panes:
* **Vendor Selector:** Contextual toggles that swap syntax compilation rules instantaneously.
* **Control Pane:** Manages input properties including Management Targets, Infrastructure Services (DHCP Scope configurations), and Interface VLAN states.
* **Terminal Output:** A high-visibility, read-only terminal wrapper with an asynchronous "Copy CLI" clipboard integration for error-free provisioning.

## 3. Data Flow Mechanism (UI to Hardware)
1. **State Capture:** User registers IP, Subnet Mask, and Gateway bindings inside the React layout layer.
2. **Dynamic Generation String Loop:** The system reads the selected vendor index and injects variables into a structural template.
3. **Execution Delivery Track:**
   * *Desktop Execution:* Deployed via native local scripts using file system calls.
   * *Web/Hardware Pipeline (Next Step):* Pushes payload over an HTTP API to a background Python environment leveraging `Netmiko` via an SSH connection stream.

## 4. Hardware Verification Protocols (Cisco Catalyst 2960-X Staging)
To test generated artifacts locally against live physical equipment, run the following verification chain post-deployment:

```cisco
# Verify DHCP binding allocations and scopes
show ip dhcp binding
show ip dhcp pool

# Verify interface state modifications
show interfaces status
show running-config interface GigabitEthernet1/0/1