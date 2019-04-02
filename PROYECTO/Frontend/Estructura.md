```
|-- app
   |-- modules
      |-- auth
         |-- containers
            |-- login         
               |-- login.component.ts
               |-- login.component.html
               |-- login.component.scss
            |-- [+] register
         |-- [+] validators
         |-- auth.module.ts
         |-- aunt-routing.module.ts
         |-- auth.service.ts
      |-- welcome
         |-- [+] components
         |-- pages [+]
         |-- welcome-routing.module.ts
         |-- welcome.module.ts
      |-- home
         |-- [+] components
         |-- pages
            |-- home.component.ts
            |-- home.component.html
            |-- home.component.scss
         |-- home.module.ts
         |-- home-routing.module.ts
         |-- home.service.ts
      |-- [+] profile
      |-- [+] jobs
      |-- [+] about
   |-- error
      |-- [+] components
      |-- error.module.ts
   |-- shared
      |-- components
         |-- [+] avatar
         |-- [+] search
         |-- [+] tabs
         |-- [+] card
         |-- [+] list
         |-- [+] rrss
         |-- [+] buton
         |-- [+] forms
         |-- [+] 404
         |-- [+] ...        
      |-- layout
         |-- components
            |-- header
            |-- nav
            |-- footer
         |-- layout.component.ts
         |-- layout.component.html
         |-- layout.component.scss
      |-- [+] directives
      |-- [+] pipes
      |-- models
         |-- shared.models.ts
         |-- auth.models.ts
         |-- player.models.ts
         |-- team.models.ts         
      |-- [+] interceptors
      |-- shared.module.ts
   |-- store
      |-- Auth
         |-- auth.actions.ts
         |-- auth.state.ts
      |-- Profile
         |-- profile.actions.ts
         |-- profile.state.ts
      |-- Error
         |-- error.actions.ts
         |-- error.state.ts
      |--Global
         |-- global.state.ts
      |--[+] ... 
|-- app.routing.module.ts
|-- app.component.html
|-- app.component.scss
|-- app.component.ts
|-- app.module.ts


```