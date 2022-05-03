const submitBtn = document.querySelector('#reviewButton');
let newFormTitle = document.querySelector('#reviewTitle');
let newFormComment = document.querySelector('#reviewText');
let newFormName = document.querySelector('#reviewName');
const reviews = document.querySelector('#reviewsRow')

submitBtn.addEventListener('click', (submit) =>{
    submit.preventDefault();
    if (newFormName.value === "") {
        newFormName.value = "Anonymous"
        console.log(newFormName.value)
    }

    let newForm = document.createElement('div');
    newForm.classList.add("col-sm-12", "col-md-6", "col-lg-4", "py-3" )
    newForm.innerHTML = `<div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title reviews-card-titles">${newFormTitle.value}</h4>
                                    <blockquote class="blockquote mb-0">
                                        <p>${newFormComment.value}</p>
                                        <footer class="blockquote-footer text-end"><i>${newFormName.value}</i></footer>
                                    </blockquote>
                                </div>
                            </div>`
    reviews.append(newForm)

    // newFormTitle.value = ""
    // newFormComment.value = ""
    // newFormName.value = ""
})
