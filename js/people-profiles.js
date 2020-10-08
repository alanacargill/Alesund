// (function() {

//     const ajaxContainer = document.querySelector('.ajax-container');
//     let ajaxContainerImage = document.querySelector('.ajax-person-image');
//     let ajaxContainerName = document.querySelector('.ajax-person-name');
//     let ajaxContainerTitle = document.querySelector('.ajax-person-title');
//     let ajaxContainerDescription = document.querySelector('.ajax-person-description');
//     const header = document.querySelector('header');
//     const main = document.querySelector('main');
//     const footer = document.querySelector('footer');
//     const copyrightFooter = document.querySelector('.copyright-footer');
//     const title = document.querySelector('.people-page-title');
//     const closeButton = document.querySelector('.ajax-close-button');

//     const readMoreButtonStates = (function() {
//         const readMoreButtons = document.querySelectorAll('.person-read-more');
//         const stateArray = [];
//         readMoreButtons.forEach((button) => {
//             const buttonParent = button.parentNode;
//             stateArray.push({
//                 readMoreButton: button,
//                 descriptionElements: buttonParent.querySelector('.person-description').querySelectorAll('p'),
//                 title: buttonParent.querySelector('.person-title').textContent,
//                 name: buttonParent.querySelector('.person-name').textContent,
//                 image: buttonParent.parentNode.querySelector('.person-image-container img').src
//             });
//         });
//         return stateArray;
//     })();

//     readMoreButtonStates.forEach((buttonState) => {
//         buttonState.readMoreButton.addEventListener('click', () => {
//             ajaxContainerImage.src = buttonState.image;
//             ajaxContainerName.textContent = buttonState.name;
//             ajaxContainerTitle.textContent = buttonState.title;
//             removeChildren(ajaxContainerDescription);
//             buttonState.descriptionElements.forEach((descriptionElement) => {
//                 ajaxContainerDescription.appendChild(descriptionElement)
//             });
//             ajaxContainer.style.display = "grid";
//             main.style.display = "none";
//             footer.style.display = "none";
//             copyrightFooter.style.display = "none";
//             header.style.display = "none";
//             title.style.display = "none";
//         });
//     });

//     function removeChildren(element) {
//         while (element.lastChild) {
//             element.removeChild(element.lastChild);
//         }
//     }

//     closeButton.addEventListener('click', () => {
//         ajaxContainer.style.display = "none";
//         main.style.display = "grid";
//         footer.style.display = "grid";
//         copyrightFooter.style.display = "grid";
//         header.styemptle.display = "flex";
//         title.style.display = "block";
//     })
// })();

$(document).ready(function(){
    $ajaxContainer = $("#ajaxContainer");
    $closeAjaxButton = $("#closeAjaxButton");
    $('.person-read-more').click(function () {
        $.ajax({
            url: "./person",
            success: function(result) {
                $ajaxContainer.html(result);
                console.log(result);
            }
        });
    });
    $closeAjaxButton.click(function () {
        $ajaxContainer.empty();
    })
});