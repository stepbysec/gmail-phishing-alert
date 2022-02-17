# gmail-phishing-alert
Gmail add-on to allow corporate users to easily report phishing attempts to a pre-set recipient (e.g. security team)

## Description
You can deploy this add-on to your Gmail organization.<br>
Doing so will provide your users with an icon on the right-hand side bar of their Gmail interface, allowing them to report quickly and efficiently e-mails that look like phishing attempts.<br>
They will not need to know which e-mail address to report the alert to, you will have it preconfigured in the add-on.<br>
They will not need to know how to forward the phishing attempt as an attachment either, the add-on will do it for them.<br>
The add-on currently asks a few quick questions to provide context to the investigation team.<br>

## Current features
- Disclaimer about the difference between spam and phishing
- Direct user to open an e-mail suspected to be a phishing attempt for the add-on to load
- Ask user whether they interacted with the phishing attempt (clicked link, opened attachement, ...)
- If user interacted, collects the interactions performed as well as any relevant comment
- Detect if the phishing attempt is potentially related to simulation campaign (based on mail header, but can be tweaked to anything)
- Send alert to predefined recipient address
- Move reported e-mail to trash

## Known limitations
- Gmail addons cannot interact with e-mails flagged as spam or stored in the trash. User needs to move them to a different folder first, (e.g.: inbox).
- Gmail addons cannot be accessed from delegated mailboxes. Feature requests have been raised to Google with little luck so far. You can contribute and help us make Google move by clicking on the upper-left side :star: [here](https://issuetracker.google.com/issues/217504483).

## Ideas for the future
- Handle multilingual context
- Refer to a list of know good sites vetted by the IT department
- Include result of automated checks (links, attachment hashes checks against VirusTotal, domain age and whois for instance) in the sent report
- Advertise a global rating or even the above results to users in an easy-to-understand format for educational purposes
- Interact with a sandbox to allow users view content of links before clicking them

## Usage
You may use this code freely, as per [MIT license](https://github.com/ChrisPixi/gmail-phishing-alert/blob/main/LICENSE).<br>
I would appreciate though if you could let me know when you do so, for the sake of knowing this has been useful. 😉<br>
I would also greaty appreciate if you could upvote this [feature request](https://issuetracker.google.com/issues/217504483) mentioned earlier! :star:<br>

To deploy the add-on to your organization:
- Create a new Apps Script project on your environment (preferably on a shared Drive) -> Go [here](https://script.google.com/home) and click on "New project" button.
- Go to *Settings* and select option to show *appsscript.json* manifest file, then overwrite *appsscript.json* with the content of *appsscript.json* available in this repository.
- Set the *logURL* string with the URL where you have a logo stored.
  - You can use the logo provided [here](https://github.com/ChrisPixi/gmail-phishing-alert/blob/main/logo%20gmail-phishing-alert.png) if you want.
  - If you do not have a Web server available to store it, you can store it on a GCP Storage bucket, associated with the GCP project you will have to create to publish the add-on. In that case, bear in mind that you will be invoiced for that storage, although it should be a very ridiculous fee.
- Overwrite content of *Code.gs* in your project with the content of *Code.gs* available in this repository.
- Replace **TO_CUSTOMIZE** strings with values relevant to your environment (begining of the *initializeEnv()* function)
- Follow [Google procedure](https://developers.google.com/apps-script/add-ons/how-tos/publish-add-on-overview) to deploy, test and eventually publish your add-on.
  - It is highly recommended to configure your deployment as private so that it is limited to your organization and does not need to be reviewed by Google.
  - It is also recommended to only allow your admin to deploy it, so that users do not need to do anything for it to work.

## References
- Thanks to Josh Frantz (@jfrantz1-r7) for posting enough code to help me start with my own (see https://github.com/jfrantz1-r7/gmail-addon-phishing).
- Worth noting that @kosborn also proposed a similar, more elaborated add-on I only discovered later (see https://github.com/kosborn/Gmail-Phish-Addon).
