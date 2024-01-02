+++
menu = "data"
title = "Data Science & Projects"
type = "data"
weight = 5
metaDescription = "Learn about data science projects showcasing machine learning, random forests, deep learning."
+++

As a data scientist, I have experience in processing, analyzing, and interpreting both structured and unstructured data. My expertise extends to utilizing statistical and machine learning techniques to develop reliable predictive models and deploying these models into production. Below is a portfolio of data projects from my education and personal ventures. More updates are coming!

#### Pixel Diagnose: Similarity Search for Brain Tumor Diagnoses

This is the final project of my data science education, an innovative application specifically designed for radiologists. It allows them to upload an MRI image of a brain tumor and view the most visually similar images from a variety of tumor diagnoses. This feature helps radiologists in making more accurate differential diagnoses. We utilized online datasets of brain tumor patients, which required extraction and preprocessing from extensive databases. Our process began with experimenting with various pre-trained models, and then we developed our own Convolutional Neural Network (CNN) from scratch, incorporating triplet loss. We used this model to generate vector embeddings that are stored in our Qdrant vector database. The application creates vector embeddings from the input images and performs a similarity search in the Qdrant database to identify the most similar images. These images are retrieved from our cloud storage and displayed in the app, which is designed to run locally.<br><br> (Full article coming soon) [See on Github](https://github.com/pixel-diagnose) and [download Docker image for Demo](https://hub.docker.com/r/mkstatistics/pixel-diagnose-demo)

![data](../images/PixelDiagnose_demo.png)

 
 <p><p>




 #### AI Meets ArtSpeak: "Simplifying" Contemporary Art Texts

 In this project, we explore International Art English (IAE), commonly known as 'artspeak.' IAE, a distinct form of English prevalent in the contemporary art world, is characterized by its specialized vocabulary and complex structures. It has sparked significant debate regarding its accessibility and impact on art communication.
Our Streamlit application (optimized for hosting on HuggingFace Spaces) adopts a playful and humorous approach to this subject. Users can upload press text and an accompanying image from a contemporary art exhibition. The app "simplifies" both the text and the image into a concise sentence each. These simplifications serve as a foundation to generate new, intricate press texts in authentic IAE style. Furthermore, the app creates four unique contemporary art images based on these simplifications and the newly formed texts. 
Developed within a very limited timeframe, this project leverages the remarkable capabilities of HuggingFace and OpenAI APIs. We utilized BLIP for image captioning, a Stable Diffusion model for image generation, a fine-tuned T5 model for text simplification, and the user can chose between Mistral 8x7B and GPT-3.5 Turbo for crafting new press texts. This selection followed extensive experimentation with various models that required GPU resources, but our goal was functionality on CPU platforms. Embracing the complexity of various models, instead of simply relying solely on OpenAI's API, not only mirrored the beautiful intricacy of artspeak but also added a rich layer of diversity to our project's technical canvas.
This project is ever-evolving, and we invite you to experience it. Visit the [GitHub page](https://github.com/coztomate/artspeaksimplifier) for more details. Stay tuned for an upcoming article that will provide deeper insights.
 

![data](../images/top.png)

![data](../images/presstexts.png)

<p><p>




#### Predicting Earthquake Building Damage

Here, I joined my first data science competition and we scored within the highest 5% of all contestants online, using XGBoost and Optuna for hyperparameter tuning. The competition’s primary objective was to use data related to building location and construction to forecast the extent of damage inflicted by the earthquake. The dataset provided for the competition was a comprehensive collection derived from surveys conducted by Kathmandu Living Labs and the Central Bureau of Statistics. Besides the classification task, we also delved into feature importance analysis. Although we did not have complete details about the meanings of all features (e.g., geolevel IDs), this analysis still yielded intriguing insights into the topic of earthquake damage.
<br><br>
[Read the full story](../competition/) or
[See on Github](https://github.com/coztomate/Earthquake_Damage)

![FeatureImportance](../Competition/feature_importance.png)
