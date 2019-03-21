const mailStorage = [
    {
        subject: "Hello world",
        from: "gogidoe@somemail.nothing",
        to: "lolabola@ui.ux",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "How could you?!",
        from: "ladyboss@somemail.nothing",
        to: "ingeneer@nomail.here",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        subject: "Acces denied",
        from: "info@cornhub.com",
        to: "gogidoe@somemail.nothing",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
];

const mailWrapper = $('#mail-wrapper');
const backBtn = $('#backBtn');
let currentShowEmail = Number(localStorage.getItem('currentShowEmail'));
if (!currentShowEmail) {
    localStorage.setItem('currentShowEmail', '1');
    currentShowEmail = Number(localStorage.getItem('currentShowEmail'));
}

let routeToEmailPage = (email)=>{
    let previousPage = $(mailWrapper);
    previousPage.remove();
    let pastePlace = 'body > script:first';
    $(pastePlace).before(createEmailItem(email, true));
    backBtn.removeAttr('hidden');


};
let createEmailItem = (email, showText) =>{
    let isText = showText ? `<p class="mail-item-text">${email.text}</p>` : '';
    let mailItem = $(
        `<div class="mail-item">
                <h4 class="mail-item-subject">${email.subject}</h4>
                <p class="mail-item-from">${email.from}</p>
                <p class="mail-item-to">${email.to}</p>   
                ${isText}             
            </div>`)

    return mailItem;
};



function showEmailList() {
    let fragment = $(document.createDocumentFragment());

    mailStorage.forEach((email) => {
        let mailItem = createEmailItem(email, false);
        mailItem.click((event)=>{
            let indexOfEmail = $(event.currentTarget).index();
            let textItem = $(event.currentTarget).find('.mail-item-text')[0];
                if (!textItem) {
                    $(`.mail-item > .mail-item-text`).remove();

                    textItem = $('<p/>', {
                        text: mailStorage[indexOfEmail].text.slice(0,108)+'...',
                        class: 'mail-item-text'
                    });
                    $(event.currentTarget).append(textItem);
                } else {
                    if (event.target !== textItem){
                    $(textItem).remove()
                    } else {
                        routeToEmailPage(email);
                    }
                }


        });
        fragment = fragment.append(mailItem);

    });
    mailWrapper.append(fragment);

}
showEmailList();

$(backBtn).click(()=>{
    $('body > :not(script)').remove();
    showEmailList();
});
