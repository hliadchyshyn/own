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


const wrapper = document.getElementById('mail-wrapper');

let currentShowEmail = Number(localStorage.getItem('currentShowEmail'));
if (!currentShowEmail) {
    localStorage.setItem('currentShowEmail', '1');
    currentShowEmail = Number(localStorage.getItem('currentShowEmail'));
}

let showModal = (email) =>{
    let modalWrapper = document.createElement('div');
    modalWrapper.className = 'modal-wrapper';
    let clone = email.cloneNode();
    clone.innerHTML = email.innerHTML;
    clone.className = 'modal';
    modalWrapper.appendChild(clone);


    modalWrapper.onclick=(event)=>{
        if(event.target === modalWrapper){
            modalWrapper.remove();
        }
    };
    document.body.insertBefore(modalWrapper, wrapper);
};

const showEmailList = () => {
    const fragment = document.createDocumentFragment();

    mailStorage.forEach((elem) => {
        let emailItem = document.createElement('div');
        emailItem.setAttribute('class', 'mail-item');

        let subject = document.createElement('h4');
        let from = document.createElement('p');
        let to = document.createElement('p');
        let text = document.createElement('a');
        text.hidden = true;
        emailItem.appendChild(subject);
        emailItem.appendChild(from);
        emailItem.appendChild(to);
        emailItem.appendChild(text);
        subject.textContent = elem.subject;
        from.textContent = elem.from;
        to.textContent = elem.to;
        text.textContent = elem.text;
        fragment.appendChild(emailItem);
        emailItem.onclick = (event) => {
            if (event.target !== text) {
                if (wrapper.children[currentShowEmail] === event.currentTarget) {
                    text.hidden = !text.hidden
                } else {
                    wrapper.children[currentShowEmail].getElementsByTagName('a')[0].hidden = true;
                    event.currentTarget.getElementsByTagName('a')[0].hidden = false;
                    currentShowEmail = [].indexOf.call(wrapper.children, event.currentTarget);
                }
            } else{
                showModal(event.currentTarget);
            }
        };

    });
    wrapper.appendChild(fragment);

};
const newEmailMOdal = () => {
    let newMailWrapper = document.createElement('div');
    newMailWrapper.className = 'new-email-modal';
    let inTo = document.createElement('input');
    inTo.setAttribute('type','email');
    inTo.setAttribute('name','to');
    let subject = document.createElement('input');
    subject.setAttribute('type','text');
    subject.setAttribute('name','subject');
    let mail = document.createElement('input');
    mail.setAttribute('type','textarea');
    mail.setAttribute('name','text');
    newMailWrapper.appendChild(inTo);
    newMailWrapper.appendChild(subject);
    newMailWrapper.appendChild(mail);
    document.body.appendChild(newMailWrapper);

    const btnClose = document.createElement('button');
    btnClose.textContent = 'Close';
    btnClose.onclick = ()=>{
        newMailWrapper.remove();
    };
    newMailWrapper.insertBefore(btnClose, inTo);

};

showEmailList();

let newMailBtn = document.getElementById('new-mail-btn');
newMailBtn.addEventListener('click', ()=>{setTimeout(newEmailMOdal, 2000)});