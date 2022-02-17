/*
 * Function initializing the global environment, to run before anything else.
 * Defines global user constants and variables that can be used in the other functions of this script.
 */
function initializeEnv(e){
  // First activate Gmail app to allow acces to opened e-mail metadata
  GmailApp.setCurrentMessageAccessToken(e.gmail.accessToken);


  /*
   * Setting "constants", i.e. properties that must not be modified, because const type cannot be used globally.
   * Note : for emojis e-mail subject and body, you can identify Gmail compatible emojis at http://unicode.org/emoji/charts/full-emoji-list.html
   * and copy/paste associated code from https://www.emojicopy.com/
   */

  // CONSTANT TO CUSTOMIZE: Recipients of the alert, preferably one e-mail address, but works with a list of comma (,) seperated addresses
  PropertiesService.getUserProperties().setProperty('constTextReportEmailAddress', "TO_CUSTOMIZE")

  // CONSTANT TO CUSTOMIZE: Header used to identify internal phishing simulation campaigns
  PropertiesService.getUserProperties().setProperty('constTextTestHeaderName', "TO_CUSTOMIZE")

  // CONSTANT TO CUSTOMIZE: Valur of the header used to identify internal phishing simulation campaigns
  PropertiesService.getUserProperties().setProperty('constTextTestHeaderValue', "TO_CUSTOMIZE")



  // Header displayed on each card of the add-on
  PropertiesService.getUserProperties().setProperty('constTextHeader', "<b>Declare phishing attempt</b>")


  // Disclaimer displayed on the default card (when no e-mail is loaded) as well as on the first card displayed after an e-mail is loaded.
  PropertiesService.getUserProperties().setProperty('constTextDisclaimerPhishingOnly', "<i>Please use this application solely for phishing attempts (see criteria below), not for unsolicited e-mails (spam).</i>")

  // Disclaimer displayed on the default card (when no e-mail is loaded).
  PropertiesService.getUserProperties().setProperty('constTextDisclaimerOpenEmail', "<b>Please <u>open</u> the e-mail you suspect to be a phishing attempt so that the application can load.</b><br><br>If the application still does not load then, please check your e-mail is not filed in \"Spam\" or \"Trash\" folders.<br><br>For any issue, please get in touch with <a href=\"mailto:" + PropertiesService.getUserProperties().getProperty('constTextReportEmailAddress') + "\">" + PropertiesService.getUserProperties().getProperty('constTextReportEmailAddress') + "</a>.")

  // "Evaluation criteria" title displayed on the default card (when no e-mail is loaded) as well as on the first card displayed after an e-mail is loaded.
  PropertiesService.getUserProperties().setProperty('constTextDisclaimerEvaluationCriteriasTitle', "<u>Evaluation criteria:</u>")

  // "Evaluation criteria" content displayed on the default card (when no e-mail is loaded) as well as on the first card displayed after an e-mail is loaded.
  PropertiesService.getUserProperties().setProperty('constTextDisclaimerEvaluationCriterias', "An e-mail is a potential phishing attempt if it meets one or several of the following conditions:<br>&nbsp;&nbsp;1. It sets a feeling of urgency. <br>&nbsp;&nbsp;2. It prompts for actions such as clicking a link, opening an attachment, providing personal or sensitive details, ... <br>&nbsp;&nbsp;3. You do not know the sender and/or the list of recipients is hidden. <br>&nbsp;&nbsp;4. The e-mail content looks suspicious (spelling/grammar mistakes, unexpected answer to an old e-mail, document sharing unrelated to ongoing activities, ...).")

  // Text displayed on the first card displayed after an e-mail is loaded.
  PropertiesService.getUserProperties().setProperty('constTextAskInteractions', "<b>Did you interact with the message (click on a link, opening attachement, replying to the sender, ...) ?</b>")


  // Text for 'Yes' button
  PropertiesService.getUserProperties().setProperty('constTextYesButton', "Yes")

  // Text for 'No' button
  PropertiesService.getUserProperties().setProperty('constTextNoButton', "No")

  // Text for 'Send' button
  PropertiesService.getUserProperties().setProperty('constTextSendButton', "Send")


  // Text displayed above the checklist for actions that the user performed
  PropertiesService.getUserProperties().setProperty('constTextSelectActionsIntro', "Please select the actions you performed:")

  // Options displayed in the checklist of actions if the user interacted with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextCheckboxItemClickedLink', "I clicked a link")
  PropertiesService.getUserProperties().setProperty('constTextCheckboxItemOpenedAttachment', "I opened an attachment")
  PropertiesService.getUserProperties().setProperty('constTextCheckboxItemAnsweredEmail', "I answered the e-mail")
  PropertiesService.getUserProperties().setProperty('constTextCheckboxItemProvidedDetails', "I provided details (identifier, password, ...)")
  PropertiesService.getUserProperties().setProperty('constTextCheckboxItemOtherActions', "Other actions")

  // Text displayed above the comments zone if the user interacted with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextCommentsIntro', "Please type in any useful comments (others actions, suspects items, ...) :")

  // Notification displayed if the user clicks 'Send' button but no action is selected
  PropertiesService.getUserProperties().setProperty('constTextSelectActionsNotification', "Please select at least one action among the list.")

  // Texts inserted into the report e-mail according to actions selected by the user
  PropertiesService.getUserProperties().setProperty('constTextLinkClicked', "Link clicked")
  PropertiesService.getUserProperties().setProperty('constTextAttachmentOpened', "Attachment opened")
  PropertiesService.getUserProperties().setProperty('constTextEmailAnswered', "E-mail replied")
  PropertiesService.getUserProperties().setProperty('constTextInformationProvided', "Details provided")
  PropertiesService.getUserProperties().setProperty('constTextOtherAction', "Other")

  // Text inserted into the report e-mail if the user did not leave any comment
  PropertiesService.getUserProperties().setProperty('constTextNoComments', "No comment provided")

  // Text inserted into the report e-mail before user comments
  PropertiesService.getUserProperties().setProperty('constTextComments', "With the following comments :")

  // Notification displayed once the alert is sent and if the user did not interact with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextReportOnlyNotification', "Thank you for your alert!")

  // Notification displayed once the alert is sent and if the user interacted with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextReportClickNotification', "Thank you for your alert, we will contact you shortly.")

  // Notification displayed once the alert is sent and if the e-mail is part of a simulation campaign
  PropertiesService.getUserProperties().setProperty('constTextReportTestNotification', "Thank you for your alert.<br><br>It seems related to an internal phishing simulation.<br><b>Please remain discreet on it so as to not alter the test results ;).</b>")


  // Text displayed on the card before the alert is sent if the user did not interact with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextDisclaimerSendCard', "Click the \"Send\" button to submit your alert.<br><br>The suspicious e-mail will be moved to the \"Trash\" folder.")

  // Warning icon
  PropertiesService.getUserProperties().setProperty('constTextWarningIcon', "⚠️")

  // Alert icon
  PropertiesService.getUserProperties().setProperty('constTextAlertIcon', "🚨")

  // Fish icon
  PropertiesService.getUserProperties().setProperty('constTextFishIcon', "🐟")


  // Alert e-mail subject in case of a real phishing attempt
  PropertiesService.getUserProperties().setProperty('constTextRealPhishingSubject', "Phishing alert")

  // Alert e-mail subject in case of a phishing simulation campaign
  PropertiesService.getUserProperties().setProperty('constTextTestPhishingSubject', "Phishing test report")


  // 1st sentence of the alert e-mail sent in case of a real phishing attempt
  PropertiesService.getUserProperties().setProperty('constTextRealPhishingFirstLine', "Alert : Suspected phishing attempt.")

  // 1st sentence of the alert e-mail sent in case of a phishing simulation campaign
  PropertiesService.getUserProperties().setProperty('constTextTestPhishingFirstLine', "Phishing test spotted.")

  // 2nd sentence of the alert e-mail sent if the user did not interact with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextNoClickSecondLine', "No action declared by the reporting user.")

  // 2nd sentence of the alert e-mail sent if the user interacted with the e-mail
  PropertiesService.getUserProperties().setProperty('constTextUserClickedSecondLine', "\nUser reported the following actions:")


  // Format to use for the e-mail attached to the alert e-mail
  PropertiesService.getUserProperties().setProperty('constTextAttachmentFormat', "message/rfc822")

  // Prefix to use for the name of the e-mail attached to the alert e-mail
  PropertiesService.getUserProperties().setProperty('constTextAttachmentPrefix', PropertiesService.getUserProperties().getProperty('constTextWarningIcon') + " Phishing attempt - ")

  // Extension to use for the name of the e-mail attached to the alert e-mail
  PropertiesService.getUserProperties().setProperty('constTextAttachmentExtension', ".eml")


  // Text displayed on the card once the alert is sent
  PropertiesService.getUserProperties().setProperty('constTextFinalMessage', "You can close this application and return to your inbox.<br><br>The suspicious e-mail will be moved to your \"Trash\" folder within few minutes.")


  /* 
   * Setting global variables
   */

  // Boolean used to track if the user interacted with the e-mail
  PropertiesService.getUserProperties().setProperty('boolUserClicked', "false")

  // Body (1st and 2nd linesexcluded) of the alert e-mail to send (i.e.: actions and comments provided if the user interacted with the phishing attempt)
  PropertiesService.getUserProperties().setProperty('textReportBody', "")

}


/*
 * Function called to create the default homepage card.
 * This card is displayed when no e-mail is opened.
 * 
 * The card contains:
 *    - A title (the same on all cards)
 *    - A disclaimer, stating that the application shall be used only for phishing e-mails, not spams
 *    - A message inviting the user to open an e-mail for the application to load
 *    - Evaluation criterias to use to determine if a message is a phishing attempt (hidden by default for readability)
 * 
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function showHomePageAddOn() {
  try {    
    // Creating card header
    var textHeader = PropertiesService.getUserProperties().getProperty('constTextHeader')
    var textHeaderParagraph = CardService.newTextParagraph()
    .setText(textHeader);
    
    // Creating card message (disclaimer + request to open an e-mail + evaluation criterias title)
    var textIntro = PropertiesService.getUserProperties().getProperty('constTextDisclaimerPhishingOnly') + "<br><br>" + PropertiesService.getUserProperties().getProperty('constTextDisclaimerOpenEmail') + "<br><br>" + PropertiesService.getUserProperties().getProperty('constTextDisclaimerEvaluationCriteriasTitle')
    var textIntroParagraph = CardService.newTextParagraph()
    .setText(textIntro);

    // Creating evaluation criterias message
    var textCriteria = "<br>" + PropertiesService.getUserProperties().getProperty('constTextDisclaimerEvaluationCriterias')
    var textCriteriaParagraph = CardService.newTextParagraph()
    .setText(textCriteria);

    // Creating card
    var card = CardService.newCardBuilder()
    .addSection(CardService.newCardSection().addWidget(textHeaderParagraph))
    .addSection(CardService.newCardSection().addWidget(textIntroParagraph).addWidget(textCriteriaParagraph).setCollapsible(true).setNumUncollapsibleWidgets(1))
    .build();
    
    return [card];
  } catch(err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error while creating the homepage card (little chance it happens, but kept to remain consistent with other cards code)
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
    .setText(err)
    .setType(CardService.NotificationType.INFO))
    .build();
  }
}


/*
 * Function called to create first page card
 * This is the card displayed when the add-on is loaded on an opened e-mail.
 * 
 * The card contains:
 *    - A title (the same on all cards)
 *    - A disclaimer, stating that the application shall be used only for phishing e-mails, not spams
 *    - A message inviting the user to click on 'Yes' or 'No' button, whether they interacted with the phishing attempt or not
 *    - Evaluation criterias to use to determine if a message is a phishing attempt (hidden by default for readability)
 *    - 'Yes' and 'No' buttons
 * 
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function showContextualAddOn(e) {
  try {
    // Let's first initialize the environment (we suppose the user did not interact with the phishing attempt by default)
    initializeEnv(e);


    // Creating card header
    var textHeader = PropertiesService.getUserProperties().getProperty('constTextHeader')
    var textHeaderParagraph = CardService.newTextParagraph()
    .setText(textHeader);

    // Creating card message (disclaimer + question about interaction + evaluation criterias title)
    var textIntroParagraph = CardService.newTextParagraph()
    .setText(PropertiesService.getUserProperties().getProperty('constTextDisclaimerPhishingOnly') + "<br><br>" + PropertiesService.getUserProperties().getProperty('constTextAskInteractions') + "<br><br>" + PropertiesService.getUserProperties().getProperty('constTextDisclaimerEvaluationCriteriasTitle'));
        
    // Creating evaluation criterias message
     var textCriteriaParagraph = CardService.newTextParagraph()
    .setText("<br>" + PropertiesService.getUserProperties().getProperty('constTextDisclaimerEvaluationCriterias'));


    // Creating 'No' button + action to call "showSendCard" function when button is clicked
    var reportOnlyAction = CardService.newAction().setFunctionName("showSendCard");
    var textNoButton = PropertiesService.getUserProperties().getProperty('constTextNoButton')
    var reportOnlyTextButton = CardService.newTextButton()
    .setText(textNoButton)
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    .setBackgroundColor("#3B80C2") // Button background color set to blue
    .setOnClickAction(reportOnlyAction)


    // Creating 'Yes' button + action to call "showClickCard" function when button is clicked
    var reportClickAction = CardService.newAction().setFunctionName("showClickCard");
    var textYesButton = PropertiesService.getUserProperties().getProperty('constTextYesButton')
    var reportClickTextButton = CardService.newTextButton()
    .setText(textYesButton)
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    .setBackgroundColor("#E40321") // Button background color set to red
    .setOnClickAction(reportClickAction)


    // Creating card
    var contextualCard = CardService.newCardBuilder()
    .addSection(CardService.newCardSection().addWidget(textHeaderParagraph))
    .addSection(CardService.newCardSection().addWidget(textIntroParagraph).addWidget(textCriteriaParagraph).setCollapsible(true).setNumUncollapsibleWidgets(1))
    .addSection(CardService.newCardSection().addWidget(CardService.newButtonSet().addButton(reportOnlyTextButton).addButton(reportClickTextButton)))
    .build();
    
    return [contextualCard];
  } catch(err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
    .setText(err)
    .setType(CardService.NotificationType.INFO))
    .build();
  }
}

/*
 * Function called to create so-called "intermediate" card
 * This is the card displayed when the user interacted with the phishing e-mail (e.g. clicked on a link, opened an attachment, ...).
 * 
 * The card contains:
 *    - A title (the same on all cards)
 *    - A section with checkboxes corresponding to potential actions performed by the user
 *    - A section with comments area
 *    - A 'Send' button
 *
 * To note: at least one action must be selected, comments are optional
 * 
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function showClickCard(e) {
  try {
    // Setting property used to track that the user interacted with the phishing attempt
    PropertiesService.getUserProperties().setProperty('boolUserClicked', "true")


    // Creating card header
    var textHeader = PropertiesService.getUserProperties().getProperty('constTextHeader')
    var textHeaderParagraph = CardService.newTextParagraph()
    .setText(textHeader);

    // Creating message displayed before checklist
    var textSelectActionsIntro = PropertiesService.getUserProperties().getProperty('constTextSelectActionsIntro')
    var textClickParagraph = CardService.newTextParagraph()
    .setText(textSelectActionsIntro);

    // Creating checkboxes with the different options.
    var checkboxGroup = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.CHECK_BOX)
    .setFieldName("actionsCheckbox")
    .addItem(PropertiesService.getUserProperties().getProperty('constTextCheckboxItemClickedLink'), "hasClickedLink", false)
    .addItem(PropertiesService.getUserProperties().getProperty('constTextCheckboxItemOpenedAttachment'), "hasOpenedAttachment", false)
    .addItem(PropertiesService.getUserProperties().getProperty('constTextCheckboxItemAnsweredEmail'), "hasAnsweredEmail", false)
    .addItem(PropertiesService.getUserProperties().getProperty('constTextCheckboxItemProvidedDetails'), "hasProvidedDetails", false)
    .addItem(PropertiesService.getUserProperties().getProperty('constTextCheckboxItemOtherActions'), "hasPerformedOtherActions", false)
  

    // Creating message displayed before comments area
    var textCommentsIntro = PropertiesService.getUserProperties().getProperty('constTextCommentsIntro')
    var textCommentsParagraph = CardService.newTextParagraph()
    .setText(textCommentsIntro);

    // Creating comments area
    var textUserInput = CardService.newTextInput()
    .setFieldName('textUserInput')
    .setMultiline(true)
 

    // Creating 'Send' button + action to call "handleClickOnNextAfterActionsInput" function when button is clicked
    var clickAction = CardService.newAction().setFunctionName("handleClickOnNextAfterActionsInput");
    var textSendButton = PropertiesService.getUserProperties().getProperty('constTextSendButton')
    var nextTextButton = CardService.newTextButton()
    .setText(textSendButton)
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    .setBackgroundColor("#3B80C2") // Button background color set to blue
    .setOnClickAction(clickAction)


    // Creating card
    var clickCard = CardService.newCardBuilder()
    .addSection(CardService.newCardSection().addWidget(textHeaderParagraph))
    .addSection(CardService.newCardSection().addWidget(textClickParagraph).addWidget(checkboxGroup))
    .addSection(CardService.newCardSection().addWidget(textCommentsParagraph).addWidget(textUserInput))
    .addSection(CardService.newCardSection().addWidget(nextTextButton))
    .build();

    // Pushing card on top of the stack (i.e. making it visible on screen)
    var nav = CardService.newNavigation().pushCard(clickCard);
    return CardService.newActionResponseBuilder()
      .setNavigation(nav)
      .build();

  } catch(err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
      .setText(err)
      .setType(CardService.NotificationType.INFO))
    .build();
  }
}


/*
 * Function called when 'Send' button is clicked on the so-called "intermediate" card
 * This function checks that at least one action is selected among the list of checkboxes
 * It sets content of "textReportBody" variable (list of selected actions + comments) and calls the "processRequest" functions when applicable.
 * If not, it returns a notification to display at the bottom of the add-on to warn that at least one action must be selected.
 * 
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function handleClickOnNextAfterActionsInput(e){
  try {

    // If variable is of type "undefined", it means that no box has been checked
    if(typeof(e.commonEventObject.formInputs.actionsCheckbox) === "undefined"){
      // Creating and returning notification displayed at the bottom of the add-on, warning that at least one action must be selected
      var textSelectActionsNotification = PropertiesService.getUserProperties().getProperty('constTextSelectActionsNotification')
      return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
      .setText(textSelectActionsNotification)
      .setType(CardService.NotificationType.INFO))
      .build();

    } else{

      // Retrieving selected actions
      var textActions = ""
      // Testing if each box is selected
        // If yes, adding corresponding text to the local variable declared previously

      if(e.commonEventObject.formInputs.actionsCheckbox.stringInputs.value.indexOf('hasClickedLink') > -1){
        textActions += "\n\t- " + PropertiesService.getUserProperties().getProperty('constTextLinkClicked')
      }
      
      if(e.commonEventObject.formInputs.actionsCheckbox.stringInputs.value.indexOf('hasOpenedAttachment') > -1){
        textActions += "\n\t- " + PropertiesService.getUserProperties().getProperty('constTextAttachmentOpened')
      }

      if(e.commonEventObject.formInputs.actionsCheckbox.stringInputs.value.indexOf('hasAnsweredEmail') > -1){
        textActions += "\n\t- " + PropertiesService.getUserProperties().getProperty('constTextEmailAnswered')
      }

      if(e.commonEventObject.formInputs.actionsCheckbox.stringInputs.value.indexOf('hasProvidedDetails') > -1){
        textActions += "\n\t- "  + PropertiesService.getUserProperties().getProperty('constTextInformationProvided')
      }

      if(e.commonEventObject.formInputs.actionsCheckbox.stringInputs.value.indexOf('hasPerformedOtherActions') > -1){
      textActions += "\n\t- " + PropertiesService.getUserProperties().getProperty('constTextOtherAction')
      }

      // Retrieving comments entered
      var textComments = ""
      if(typeof(e.commonEventObject.formInputs.textUserInput) === "undefined"){
        textComments = PropertiesService.getUserProperties().getProperty('constTextNoComments')
      } else {
        textComments = PropertiesService.getUserProperties().getProperty('constTextComments') + "\n\t" + e.commonEventObject.formInputs.textUserInput.stringInputs.value[0]
      }
      // Setting "textReportBody" global variable with the list of selectes actions, followed by comments entered by the user, when applicable
      PropertiesService.getUserProperties().setProperty('textReportBody', textActions + "\n\n" + textComments)

      // Calling and returning result of "processRequest" function
      return processRequest(e);
    }
  } catch(err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
    .setText(err)
    .setType(CardService.NotificationType.INFO))
    .build();
  }
}

/*
 * Function called to create so-called "check-before-submission" card
 * This is the card displayed when the user did not interact with the phishing e-mail.
 * This card allows the user to confirm or go back before sending the alert.
 * 
 * The card contains:
 *    - A title (the same on all cards)
 *    - A section with information
 *    - A 'Send' button
 *
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function showSendCard(e) {
  try {
    // Resetting boolean to "false", should the user go back and forth among the different cards.
    PropertiesService.getUserProperties().setProperty('boolUserClicked', "false")


    // Creating card header
    var textHeader = PropertiesService.getUserProperties().getProperty('constTextHeader')
    var textHeaderParagraph = CardService.newTextParagraph()
    .setText(textHeader);

    // Creating card message
    var textTextToDisplay = PropertiesService.getUserProperties().getProperty('constTextDisclaimerSendCard')
    var textSendParagraph = CardService.newTextParagraph()
    .setText(textTextToDisplay);


    // Creating 'Send' button + action to call "processRequest" function when button is clicked
    var sendAlertAction = CardService.newAction().setFunctionName("processRequest");
    var textSendButton = PropertiesService.getUserProperties().getProperty('constTextSendButton')
    var sendAlertTextButton = CardService.newTextButton()
    .setText(textSendButton)
    .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
    .setBackgroundColor("#3B80C2") // Button background color set to blue
    .setOnClickAction(sendAlertAction)


    // Creating card
    var sendAlertCard = CardService.newCardBuilder()
    .addSection(CardService.newCardSection().addWidget(textHeaderParagraph))
    .addSection(CardService.newCardSection().addWidget(textSendParagraph))
    .addSection(CardService.newCardSection().addWidget(sendAlertTextButton))
    .build();

    // Pushing card on top of the stack (i.e. making it visible on screen)
    var nav = CardService.newNavigation().pushCard(sendAlertCard);
    return CardService.newActionResponseBuilder()
      .setNavigation(nav)
      .build();

  } catch(err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
      .setText(err)
      .setType(CardService.NotificationType.INFO))
    .build();
  }
}


/*
 * Function called to send the alert, delete the phishing e-mail and create the final card
 * This is the card displayed at the end of the process, confirming the user the alert is sent and that they can close the add-on.
 * The function first checks if the phishing attempt corresponds to a simulation campaign and modifies the alert subject and body accordingly along with the message
 * displayed on the card.
 * 
 * The card contains:
 *    - A title (the same on all cards)
 *    - A section with information
 *
 * In case of error, a notification is displayed at the bottom of the add-on with error details.
 */
function processRequest(e) {
  try {
    // Retrieving details about the phishing attempt (sender, subject, raw content)
    var messageId = e.gmail.messageId;
    var mailMessage = GmailApp.getMessageById(messageId);
    var sender = mailMessage.getFrom();
    var subject = mailMessage.getSubject();
    var rawContent = mailMessage.getRawContent()

    // Setting a local boolean to track if the phishing attempt contains a header matching the value used for simulation campaigns
    var isATest = (mailMessage.getHeader(PropertiesService.getUserProperties().getProperty('constTextTestHeaderName')) == PropertiesService.getUserProperties().getProperty('constTextTestHeaderValue'))

    // Retrieving boolean used to track is the user interacted with the phishing attempt
    var hasUserClicked = (PropertiesService.getUserProperties().getProperty('boolUserClicked') == "true")

    // Setting local variables for alert recipients, subject and content, along with format and name to use for the attachment
    var textEmailRecipient = PropertiesService.getUserProperties().getProperty('constTextReportEmailAddress')
    var textEmailSubject = "";
    var textEmailBody = "";
    var textAttachmentFormat = PropertiesService.getUserProperties().getProperty('constTextAttachmentFormat')
    var textAttachmentName = PropertiesService.getUserProperties().getProperty('constTextAttachmentPrefix') + subject + PropertiesService.getUserProperties().getProperty('constTextAttachmentExtension')

    // Setting content of alert "subject" and first line of "body", depending on whether the phishing attempt is a test and whether the user interacted with it.
    if (isATest){
      textEmailSubject = PropertiesService.getUserProperties().getProperty('constTextFishIcon') + " " + PropertiesService.getUserProperties().getProperty('constTextTestPhishingSubject') + " | " + sender + " | " + subject
      textEmailBody = PropertiesService.getUserProperties().getProperty('constTextTestPhishingFirstLine')
    } else{
        textEmailBody = PropertiesService.getUserProperties().getProperty('constTextRealPhishingFirstLine')

        if(hasUserClicked){
          textEmailSubject = PropertiesService.getUserProperties().getProperty('constTextAlertIcon') + " " + PropertiesService.getUserProperties().getProperty('constTextRealPhishingSubject') + " " + PropertiesService.getUserProperties().getProperty('constTextAlertIcon') + " | " + sender + " | " + subject
        } else{
          textEmailSubject = PropertiesService.getUserProperties().getProperty('constTextWarningIcon') + " " + PropertiesService.getUserProperties().getProperty('constTextRealPhishingSubject') + " " + PropertiesService.getUserProperties().getProperty('constTextWarningIcon') + " | " + sender + " | " + subject
        }
    }

    // Setting content of second line of alert "body", depending on whether the user interacted with it only.
    if(hasUserClicked){
      textEmailBody += "\n" + PropertiesService.getUserProperties().getProperty('constTextUserClickedSecondLine') + "\n" + PropertiesService.getUserProperties().getProperty('textReportBody')
    } else{
      textEmailBody += "\n" + PropertiesService.getUserProperties().getProperty('constTextNoClickSecondLine')
    }


    // Sending alert e-mail along with the phishing attempt attached
    MailApp.sendEmail(textEmailRecipient, textEmailSubject, textEmailBody, {
      attachments: [
          Utilities.newBlob(rawContent, textAttachmentFormat, textAttachmentName)
      ]
    });
    
    // Moving phishing attempt to trash
    GmailApp.moveMessageToTrash(mailMessage);
    

    // Creating card header
    var textHeader = PropertiesService.getUserProperties().getProperty('constTextHeader')
    var textHeaderParagraph = CardService.newTextParagraph()
    .setText(textHeader);

    // Creating card message, depending on whether the phishing attempt is part of a simulation campaign or not
    var textToDisplay = ""
    if(isATest){
      textToDisplay = PropertiesService.getUserProperties().getProperty('constTextReportTestNotification')
    } else {
      if(hasUserClicked){
        textToDisplay = PropertiesService.getUserProperties().getProperty('constTextReportClickNotification')
      } else{
        textToDisplay = PropertiesService.getUserProperties().getProperty('constTextReportOnlyNotification')
      }
    }

    textToDisplay += "<br><br>" + PropertiesService.getUserProperties().getProperty('constTextFinalMessage')
    var textCompleteParagraph = CardService.newTextParagraph()
    .setText(textToDisplay);
  

    // Creating card
    var completeCard = CardService.newCardBuilder()
    .addSection(CardService.newCardSection().addWidget(textHeaderParagraph))
    .addSection(CardService.newCardSection().addWidget(textCompleteParagraph))
    .build();

    // Pushing card on top of the stack (i.e. making it visible on screen)
    var nav = CardService.newNavigation().pushCard(completeCard);
    return CardService.newActionResponseBuilder()
      .setNavigation(nav)
      .build();

  } catch (err) {
    // Creating and returning notification displayed at the bottom of the add-on, in case of error
    return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
      .setText(err)
      .setType(CardService.NotificationType.INFO))
    .build();
  }
}
