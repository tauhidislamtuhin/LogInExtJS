Ext.define('LogIn.view.main.LogInController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',
    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("LogIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main',
            layout: 'fit',
            renderTo: Ext.getBody(),
     
            height: 1000,
           
        
           
        });

    }

   
});
