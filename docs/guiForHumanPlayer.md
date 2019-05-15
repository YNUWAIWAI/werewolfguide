---
id: guiForHumanPlayer
title: Graphical user interface for human player
sidebar_label: Graphical user interface for human player
---
[Figure 1](#figure1) is a screenshot of a game played by human players using a web browser. In the upper left, we show the date and phase of the game and the remaining time until the next phase. In the upper right, we show the icon of the user's agent, name ("Yihan" in the screenshot), role ("Villager"), and team ("Villagers"). The center-left portion of the screen is dedicated to the chat-shaped timeline. In the lower part, there are three input forms the player can type their message in. The message from the left form (called the “public chat form”) will be shown to all the players. The message from the center form (“private memorandum form”) will be visible only to the player who has written it. The message from the right form (“werewolf chat form”) will be visible only to the werewolves. If the number of werewolves is one in the composition of the village, the werewolf chat form is not shown. In the center-right, there is the conjecture table. While talking to other players using the chat-shaped timeline, the player can easily organize their suppositions about the other players' identity on the conjecture table.

<figure id="figure1">
  <img
    alt="A screenshot of the morning phase"
    src="/img/morning.png"
  >
  <figcaption>Figure 1 “A screenshot of the morning phase”</figcaption>
</figure>

[Figure 2](#figure2) is a screenshot of the noon phase and [Figure 3](#figure3) is a screenshot of the night phase. The lower part of the noon phase and the night phase is different from the morning phase. In the lower part, instead of input forms for the chat-shaped timeline, there is a list of agents on who to perform an action (the action differs according to phase and role).

<figure id="figure2">
  <img
    alt="A screenshot of the noon phase"
    src="/img/noon.png"
  >
  <figcaption>Figure 2 “A screenshot of the noon phase”</figcaption>
</figure>

<figure id="figure3">
  <img
    alt="A screenshot of the night phase"
    src="/img/night.png"
  >
  <figcaption>Figure 3 “A screenshot of the night phase”</figcaption>
</figure>

## Graveyard

[Figure 4](#figure4) is a screenshot of the graveyard. A ghost can see only one form in the lower part of the screen, which they can type their message in. The message from the form (called “graveyard message form”) will be visible only to the ghosts. In the lower right, there is a button (“return button”) for leaving the game and return to the lobby.

<figure id="figure4">
  <img
    alt="A screenshot of the graveyard"
    src="/img/graveyard.png"
  >
  <figcaption>Figure 4 “A screenshot of the graveyard”</figcaption>
</figure>

## Chat input form

The chat input form appears in the lower part. [Figure 5](#figure5) shows an example of the chat input form. It consists of a textarea in the upper part, an icon in the lower left and a button in the lower right.

<figure id="figure5">
  <img
    alt="An example of the chat input form"
    src="/img/chatInputForm.png"
  >
  <figcaption>Figure 5 “An example of the chat input form”</figcaption>
</figure>

### The textarea

The numerals in the lower right of the textarea represents the character count. If the count is zero or more than the character limit, the numerals are red. Otherwise, the numerals are black. If the player starts to type particular terms referred to the game (with the prefix “@”), suggestions appear as shown in [Figure 6](#figure6).

<figure id="figure6">
  <img
    alt="Suggestions in the textarea"
    src="/img/suggestionnsInTheTextarea.png"
  >
  <figcaption>Figure 6 “Suggestions in the textarea”</figcaption>
</figure>

### The button

Once the player pushes the button, the message in the textarea is sent to the chat-shaped timeline. When the numerals in the textarea are red or in the next 5 seconds after pushing the button, the button is unavailable.

### The icon

The icon, the color of the textarea and the placeholder text represent the message form type. There are the following five types of message forms.

#### 1. Public chat form

In the morning, if the player is still alive, the public chat form appears. The message from the form will be shown to all the players. The placeholder text is a “public” if the locale is English. The color of the public chat is orange and the icon is shown in [Figure 7](#figure7).

<figure id="figure7">
  <img
    alt="The icon about public chat"
    src="/img/publicChatIcon1.png"
  >
  <figcaption>Figure 7 “The icon about public chat”</figcaption>
</figure>

#### 2. Private memorandum form

In the morning, if the player is still alive, the private memorandum form appears. The message from the form will be shown only to the player who has written it. The placeholder text is a “private” if the locale is English. The color of the private memorandum is gray and the icon is shown in [Figure 8](#figure8).

<figure id="figure8">
  <img
    alt="The icon about private memorandum"
    src="/img/privateMemorandumIcon1.png"
  >
  <figcaption>Figure 8 “The icon about private memorandum”</figcaption>
</figure>

#### 3. Werewolf chat form

In the morning, if the werewolf is still alive and the number of werewolves in the village composition is more than one, the werewolf chat form appears. The message from the form will be shown only to all the werewolves. The placeholder text is a “werewolf” if the locale is English. The color of the werewolf chat is red and the icon is shown in [Figure 9](#figure9).

<figure id="figure9">
  <img
    alt="The icon of the werewolf chat"
    src="/img/werewolfChatIcon1.png"
  >
  <figcaption>Figure 9 “The icon of the werewolf chat”</figcaption>
</figure>

#### 4. Graveyard chat form

If the player is dead, the graveyard chat form appears. The message from the form will be shown only to all the ghosts. The placeholder text is a “graveyard” if the locale is English. The color of the graveyard chat is blue and the icon is shown in Figure 10.

<figure id="figure10">
  <img
    alt="The icon of the graveyard chat"
    src="/img/graveyardChatIcon1.png"
  >
  <figcaption>Figure 10 “The icon of the graveyard chat”</figcaption>
</figure>

#### 5. Post-mortem discussion form

Within twenty-four hours after the end of the game, the post-mortem discussion form is visible. The message from the form will be shown to all the players. The placeholder text is a “post-mortem discussion” if the locale is English. The color and the icon of the post-mortem discussion are the same as the the public chat, so the color of the post-mortem discussion is orange and the icon is shown in [Figure 11](#figure11).

<figure id="figure11">
  <img
    alt="The icon of the post-mortem discussion"
    src="/img/postMortemChatIcon1.png"
  >
  <figcaption>Figure 11 “The icon of the post-mortem discussion”</figcaption>
</figure>

## Chat-shaped timeline

Chat-shaped timeline is a list of message balloons ordered by server timestamp. The latest message is placed in the lowest and the oldest one is placed in the most upper.

<figure id="figure12">
  <img
    alt="Chat-shaped timeline"
    src="/img/timeline.png"
  >
  <figcaption>Figure 12 “Chat-shaped timeline”</figcaption>
</figure>

The player own icon is placed in the right of the balloon as shown in [Figure 13](#figure13) and an another player’s icon is shown in the left of the balloon as shown in [Figure 14](#figure14).

<figure id="figure13">
  <img
    alt="An example about a balloon of the player own message"
    src="/img/ownMessage.png"
  >
  <figcaption>Figure 13 “An example about a balloon of the player own message”</figcaption>
</figure>

<figure id="figure14">
  <img
    alt="An example about a balloon of an another player’s message"
    src="/img/anothoerPlayerMessage.png"
  >
  <figcaption>Figure 14 “An example about a balloon of an another player’s message”</figcaption>
</figure>

### The balloon

The balloon consists of the number, the message, the icon, the color and the timestamp. There is the number in the upper left in the balloon if the message type is the public chat, the master comment or the post-mortem discussion. The message is in the upper right. The icon is in the lower left. The timestamp is in the lower right.

### The timestamp

The game server generates the time stamp. The time zone depends on where the game server is. For example, if the game server is in Japan, the time zone of the time stamp is JST (Japan standard time).

### The icon and the color

The icon and the color represents the message type. There are the following six types of messages.

#### 1. The public chat

The message is shown to all the players. The color of the public chat is orange and the icon is shown in [Figure 15](#figure15).

<figure id="figure15">
  <img
    alt="The icon of the public chat"
    src="/img/publicChatIcon2.png"
  >
  <figcaption>Figure 15 “The icon of the public chat”</figcaption>
</figure>

#### 2. The private memorandum

The message is shown only to the player who has written it. The color of the private memorandum is gray and the icon is shown in [Figure 16](#figure16).

<figure id="figure16">
  <img
    alt="The icon of the private memorandum"
    src="/img/privateMemorandumIcon2.png"
  >
  <figcaption>Figure 16 “The icon of the private memorandum”</figcaption>
</figure>

#### 3. The werewolf chat

The message is shown only to all the werewolves. The color of the werewolf chat is red and the icon is shown in [Figure 17](#figure17).

<figure id="figure17">
  <img
    alt="The icon of the werewolf chat"
    src="/img/werewolfChatIcon2.png"
  >
  <figcaption>Figure 17 “The icon of the werewolf chat”</figcaption>
</figure>

#### 4. The graveyard chat

The message is shown only to all the ghosts. The color of the graveyard chat is blue and the icon is shown in [Figure 18](#figure18).

<figure id="figure18">
  <img
    alt="The icon of the graveyard chat"
    src="/img/graveyardChatIcon2.png"
  >
  <figcaption>Figure 18 “The icon of the graveyard chat”</figcaption>
</figure>

#### 5. The master comment

The message is shown to all the players. The color of the master comment is green and the icon is shown in [Figure 19](#figure19).

<figure id="figure19">
  <img
    alt="The icon of the master comment"
    src="/img/masterIcon.png"
  >
  <figcaption>Figure 19 “The icon of the master comment”</figcaption>
</figure>

#### 6. The audience chat

The message is shown to all the audiences except the players. The color of the audience chat is orange and the icon is shown in [Figure 20](#figure20).

<figure id="figure20">
  <img
    alt="The icon of the audience chat"
    src="/img/audienceIcon.png"
  >
  <figcaption>Figure 20 “The icon of the audience chat”</figcaption>
</figure>

## Vote input form