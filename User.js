Ext.define('LogIn.view.main.User', {
    extend: 'Ext.Container',
    xtype: 'user',
    //controller: 'create-account',
  
    requires: [
        'LogIn.view.main.LogInController',
        

    ],

    controller: 'login',
 


    // style: {
    //     'background-image': 'linear-gradient(to right, #2E3192 , #1BFFFF)'
    //   },
      


    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },


    items: [
        {
            xtype: 'form',
            height: 500,
            width: 340,
            reference: 'formLogin',
            bodyPadding: 30,
            items: [
              
                { xtype: 'image',
                height: 90,
                width: 280,
                margin: '0 0 0 0',
                alt: 'sencha-logo-image',
                src: Ext.theme.name === "Aria" ? 'resources/images/sencha.svg' : 'resources/images/sencha.svg'
            },{
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '9 0 0 0',
                    src :'resources/image/sencha.svg',
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'

                    }
                    
                },
                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    margin: '9 0 0 0',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    margin: "25 0 0 0",
                    fieldLabel: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 0",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    width: 280,
                    height: 30,
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    margin: "25 0 0 0",
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    
                    listeners: {
                        click: 'onLoginClick'
                    },
                    height: 30,
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center'
                    },
                    width: 280,
                    margin: "20 0 0 0"
                }
            ]
        },
        {
            xtype: 'component',
            margin: "4 0 0 0",
            width: 280,
            
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Don’t have an account?' +
            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-create-account'> Sign-Up</a>"
        }
    ]

 

});
