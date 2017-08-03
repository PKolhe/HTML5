/*
What is Web Storage ?

    Local Storage + Session Storage

    Local Storage 
        * Local Storage is much like Cookie. WE can write information on users machine and can use it 
          whenever we want it.
        * With Local storage, We have ability to come back even after the browser window has been closed
          and pull that information back from the users machine.

    Session Storage
        Session Storage works in same fashon only the life cycle of that information is available 
        throughout the user session, across page refreshes, across different browser tabs, 
        Once that session is done, that information goes away.
    
    Security of Storage Information -

        When we talk about security, we have that information available when we are going through session data
        basically per session and its also constricted per domain.

    Capacity of Information -

        * Client Controlled
        * Depending on the browser between 2-10 MB space is available in browser configuration.
          We can use lots of more space if we use cookies now.
    
    Web Storage VS Cookies 
        * Cookies are the basic frame of reference that we have to work with when we think of persitsting data 
          on client machine.
        * Cookies are having much smaller capacity than what we have available in Web Storage.
        * Since there is so much data available one of the things that does not happen with web storage data that 
          does happen with cookies is that information  is not sent to the server with every request. 
          So data is not sent across the wire every time we request a page, it only stays on the client.
          so completely client only.
    
    Web Storage Vs IndexDB
        * IndexDB is the new Client side database thats emarging as one of the HTML5 standards.
        * Web Storage is much simple API than comparing to IndexDB. WebStorage is simply Key-Value pair,
          and there is no querying language for anything.
        * IndexDB database is much more robust and has much more capability to have true database like qualitites
          on the client is still mostly being developed.
    
    Storage API
        storage.clear
        storage.getItem
        storage.length
        storage.key
        storage.remainingSpace
        storage.removeITem
        storage.setITem

        storage.event




*/ 