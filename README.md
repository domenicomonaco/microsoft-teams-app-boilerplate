# Boilerplate for MS Teams App

![Microsoft Teams App Boilerplate](https://repository-images.githubusercontent.com/307682489/1a7d8b00-1869-11eb-919a-3ee0a1edfef3)

### Sponsored by

[<img align="left" style="margin:5px" src="http://cdn.tecnologieperpersone.it/img/dmonaco_happy_hacking.png" height="64" />](https://blog.domenicomonaco.it)

[<img style="margin:5px" src="http://cdn.tecnologieperpersone.it/img/tecnologie-per-persone-logo.png" height="64" />](https://tecnologieperpersone.it)



## The most cool MS Teams App template

Zero-friction kick-start MS teams App development boilerplate with ReactJS and NodeJS.

### Boilerplate Teams App helps you kick-start build fast web apps for Microsoft Teams.
__

Boilerplate Teams App is derived by example code generated with Microsoft Teams Toolkit Visual Studio Code: [https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/rkbuild-and-run
](https://docs.microsoft.com/en-us/microsoftteams/platform/build-your-first-app/build-and-run
)

## Prerequisites
- [NodeJS](https://nodejs.org/en/)
- [M365 developer account](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/prepare-your-o365-tenant) or access to a Teams account with the appropriate permissions to install an app.
- Static domain/subdomain ** see *Configure domain / local tunneling* **
- [Docker](https://www.docker.com/) *[!] If you need a container-based deploy*


## Configure domain / local tunneling

Because static domain or subdomain are not always avaliable, I suggest use tunneling offered by localtunnel with an HASHCODE that in much cases will not occupated  others at least in a day. 

**!!! I you already have a static domain/subdomain, you can use it instead of HASCODED local tunneling explained below**

1) Open *.publish/Development.env* and customize the **baseUrl0=...** with personal Hash code generated as below:

- baseUrl0=https://**HASHCODE**.loca.lt
	- ie. https://95564aa16728f9ea2cf8d6edd3b175bb.loca.lt

2) Open *Package.json* and customize  *"tunnel": ...*  as below

- "tunnel": "lt --subdomain **HASHCODE** --port 3000"
	- ie. "tunnel": "lt --subdomain 95564aa16728f9ea2cf8d6edd3b175bb --port 3000"
 
## Build, Run and Share

In the project directory, execute:

`npm install`

`npm run-script start`

`npm run-script build`

`npm run-script update`

`npm run-script tunnel`

**Upload app from the Teams client**

- Upload the `Development.zip` from the *.publish* folder to Teams.
  - [Upload a custom app](https://aka.ms/teams-toolkit-uploadapp) 

## Versions

**v.1.0)** *What a hell is this 'custom MS Teams App'?*

**v.2.0)** Agile 'build, run and share' workflow for development, basic architecture file, strucuring tab/view, static assets managing, styling with SCSS/SASS , build and keep updated temporary Development.zip;

**v.3.0)** Custom fonts, globals styles, utils and services strucured folder, visibile on mobile Teams App;

**v.4.0)** Dockerized with docker file and docker-compose; implemented simple azure-pipeline 

## Attribution

All logos and images are from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

Based on already adopted License by [Microsoft](https://github.com/OfficeDev/microsoft-teams-library-js
) in projects mentioned here:

	All files on the Boilerplate Teams App GitHub repository are subject to the MIT license. Please read the License file at the root of the project.


## References

- [https://developer.microsoft.com/](https://developer.microsoft.com/)
- [https://docs.microsoft.com/](https://docs.microsoft.com/)
- [https://github.com/OfficeDev/microsoft-teams-library-js](https://github.com/OfficeDev/microsoft-teams-library-js)
- [https://docs.microsoft.com/en-us/microsoftteams/platform/overview](https://docs.microsoft.com/en-us/microsoftteams/platform/overview)

