Ext.define('LogIn.view.main.RegisterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.register',
    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("LogIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'user',
           
            renderTo: Ext.getBody(),
     
            height: 550,
            width: 340,
            margin: '100 100 100 750',
            
            bodyPadding: 30,
            layout: {
                type: 'vbox',
                align: 'left',
                pack: 'center'
            }
            
           
        
           
        });

    }

   
});
