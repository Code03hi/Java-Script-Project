const generatedForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".imgae-gallery")
const OPENAI_API_KEY = "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";

const updateImageCard = (imgDataArray) =>
{
    console.log("hello")
    imgDataArray.forEach((imgObject,index) => {
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
        const imgElement = imgCard.querySelector("img");
        const downloadBtn = imgCard.querySelector(".download-btn");

        // set the image source to the AI-generated image data
        const aiGenerated = `data:Image/jpeg;base64,${imgObject.b64_json}`
        imgElement.src = aiGenerated
        imgElement.onload = () =>
        {
            imgCard.classList.remove("loading");
            downloadBtn.setAttribute("href", aiGenerated);
            downloadBtn.setAttribute("download", `${new Date().getTime}.jpg`)
        }
    });
}

const generateAiIamge = async (userPrompt,userImageQuantity) =>
{
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify(
                {
                    prompt: userPrompt,
                    n: parseInt(userImageQuantity),
                    size: "1024x1024",
                    response_format: "b64_json"
                }
            )
        });
        if(!response.ok) throw new Error("Failed to generate imgaes! Please try again.")
        const {data} = await response.json();
        updateImageCard([...data]);  
    } catch (error) {
        alert(error.message);
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get user Input and image quantity values from the form
    const userPrompt = event.srcElement[0].value;
    const userImageQuantity = event.srcElement[1].value;

    // Creating HTML markup for image cards with loading state
    const imgCardMarkup = Array.from({ length: userImageQuantity }, () =>
    `<div class="img-card loading">
    <img src="Image/loader.svg" alt="image">
    <a href="#" class="download-btn">
        <img src="Image/download.svg" alt=""></a>
        </div>`
    ).join("");
    
    imageGallery.innerHTML = imgCardMarkup

    generateAiIamge(userPrompt,userImageQuantity);
}

generatedForm.addEventListener("submit", handleFormSubmit)