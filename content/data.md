+++
menu = "data"
title = "Data Science & Projects"
type = "data"
weight = 5
+++

As a data scientist, I have experience in processing, analyzing, and interpreting both structured and unstructured data. My expertise extends to utilizing statistical and machine learning techniques to develop reliable predictive models and deploying these models into production. Below is a portfolio of data projects from my education and personal ventures. More updates are coming!

#### Pixel Diagnose: Similarity Search for Brain Tumor Diagnoses

This is the final project of my data science education, an innovative application specifically designed for radiologists. It allows them to upload an MRI image of a brain tumor and view the most visually similar images from a variety of tumor diagnoses. This feature helps radiologists in making more accurate differential diagnoses. We utilized online datasets of brain tumor patients, which required extraction and preprocessing from extensive databases. Our process began with experimenting with various pre-trained models, and then we developed our own Convolutional Neural Network (CNN) from scratch, incorporating triplet loss. We used this model to generate vector embeddings that are stored in our Qdrant vector database. The application creates vector embeddings from the input images and performs a similarity search in the Qdrant database to identify the most similar images. These images are retrieved from our cloud storage and displayed in the app, which is designed to run locally.<br><br> (Full article coming soon) [See on Github](https://github.com/pixel-diagnose/pixel-diagnose) and [download Docker image for Demo](https://hub.docker.com/r/mkstatistics/pixel-diagnose-demo)

![data](../images/PixelDiagnose_demo.png)

 
 <p><p>




 #### AI Meets ArtSpeak: "Simplifying" Contemporary Art Texts

 In this project, we address the phenomenon of International Art English (IAE), also known as 'artspeak.' IAE is a unique form of English often used in the contemporary art world, characterized by its specialized vocabulary and complex structures, sparking considerable debate for its accessibility and impact on art communication. Our app, deployed on HuggingFace Spaces, offers a somewhat humorous approach to this topic. Users can input the press text and accompanying image from a contemporary art exhibition. The app then "simplifies" both the text and the image into one short sentence each. Utilizing these simplifications, it can generate new, elaborate press texts in credible International Art English. Additionally, the app produces four possible new contemporary art images based on these simplifications and the newly generated texts. For this project, we employed models accessed through the HuggingFace inference API: BLIP for image captioning and Stable Diffusion for image generation. We also utilized a fine-tuned T5 model trained for text simplification, along with the OpenAI API (GPT-3.5 Turbo), with prompts we engineered and tested to generate the new press texts. In an earlier version we experimented with openClip  (coca_ViT-L-14) for image captioning, but our aim was to get the app running smoothly on a CPU. This ongoing project will continue to be refined. You can try out the [app](https://huggingface.co/spaces/coztomate/artspeak_reloaded). And see on [GitHub](https://github.com/coztomate/artspeaksimplifier). <br> A full article with further insights is coming soon.

![data](../images/artspeak.png)

![data](../images/artspeak_output.png)

<p><p>




#### Predicting Earthquake Building Damage

Here, I joined my first data science competition and we scored within the highest 5% of all contestants online, using XGBoost and Optuna for hyperparameter tuning. The competition’s primary objective was to use data related to building location and construction to forecast the extent of damage inflicted by the earthquake. The dataset provided for the competition was a comprehensive collection derived from surveys conducted by Kathmandu Living Labs and the Central Bureau of Statistics. Besides the classification task, we also delved into feature importance analysis. Although we did not have complete details about the meanings of all features (e.g., geolevel IDs), this analysis still yielded intriguing insights into the topic of earthquake damage.
<br><br>
[Read the full story](../competition/) or
[See on Github](https://github.com/coztomate/Earthquake_Damage)

![FeatureImportance](../Competition/feature_importance.png)
