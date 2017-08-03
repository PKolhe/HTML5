/*

GeoLocation 
    * It's ability of Web Browser to be able to communicate with ouitside world and find out 
      where in the world that device is located.
    * So geolocation may be used for many, many different applications, but often you will encounter
      the need for geolocation when we are building the mobile applications or at least an application
      that needs to be aware of where actually a person is.
    
    Request Patterns 

            One time                Continual
                    Asynchronous Requests

        Request patterns are avilable are either of the opportunity to ask for the location of the
        device one single time, and may be we are building a movies application and instead of requiring that someone 
        puts in their zipcode, we could use geolocation to find out where they are and show them movies 
        that are available in their area.

        Or We may want application to continually ask for the coordinates or the position of the device.
        and this might be useful if we are building mapping application.

    The Request position goes out asynchronous to the browser and so we will make call out to request position
    sometime will elapse, and when we get response back then we can do something with that information.
    
    Techniques used to calculate the location of User -

        1. IP Address
        
            Pros - Available Everywhere, Processed Server Side (Does not use client resources)
            Cons - Low Accuracy, High Processing Overhead
        
        2. GPS

            Pros - High Accuracy
            Cons - Long Operation, Hardware Required( like devices which has GPS enabled),
                   Not optimal for In doors ( if your inside home or inside parking garage)
        
        3. WiFi

            Pros - Accurate, Works In doors, Quick & Cheap Response
            Cons - In effective in areas where limited access points of Wifi
        
        4. Cell Phones

            Pros - FAirly Accurate, Works In doors, Quick & Cheap Response
            Cons - Required access to Cell phones or modems, In effective in areas where low cell towers

        5. User Defined
            
            Pros - High Accuracy, Flexibility to designate alternate locations, May be fasted option
            Cons - Can be very in accurate(may be when location changes)
        
      Geolocation Options

          1. High Accuracy - boolean value, default value is false, may not do anything
                             Attempt to gather more accurate information of coordinates,
                             May cause requests to take longer.
          2. Timeout - Miliseconds, default value is no limit, determines max time allowed to calculate location, 
          3. Maximum Age - Determines how old location value may be before an attempt to refresh coordinates,
                           Miliseconds, default is 0.
      
      Go through Demos








*/