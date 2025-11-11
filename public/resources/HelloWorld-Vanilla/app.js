// Menu configuration
const menuObject = {
    title: "Quadri shared Model",
    icon: "https://abcd.com/images/q.svg",
    command: "QUADRI_TOP_MENU",
    subMenus: [
        {
            title: "Quadri shared Modelsubmenu1",
            icon: "https://abcd.com/images/q1.svg",
            command: "QUADRI_SUB_MENU1"
        },
        {
            title: "Quadri shared Model submenu2",
            icon: "https://abcd.com/images/q2.svg",
            command: "QUADRI_SUB_MENU2"
        }
    ]
};

// Listen for messages from Trimble Connect
window.addEventListener('message', function(event) {
    console.log('Received message from Trimble Connect:', event.data);
    
    // Handle menu commands
    if (event.data && event.data.command) {
        handleMenuCommand(event.data.command);
    }
});

// Handle menu commands
function handleMenuCommand(command) {
    console.log('Menu command received:', command);
    
    switch(command) {
        case 'QUADRI_TOP_MENU':
            console.log('Top menu clicked');
            // Add your logic here
            break;
        case 'QUADRI_SUB_MENU1':
            console.log('Submenu 1 clicked');
            // Add your logic here
            break;
        case 'QUADRI_SUB_MENU2':
            console.log('Submenu 2 clicked');
            // Add your logic here
            break;
        default:
            console.log('Unknown command:', command);
    }
}

// Initialize extension
function initExtension() {
    console.log('Hello World Extension loaded');
    
    // Notify parent that extension is ready
    if (window.parent) {
        window.parent.postMessage({
            type: 'extension-ready',
            extensionId: 'hello-world-extension'
        }, '*');
        
        // Register menu
        window.parent.postMessage({
            type: 'register-menu',
            menu: menuObject
        }, '*');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExtension);
} else {
    initExtension();
}

