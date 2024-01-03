+++
metaDescription = "Simplifying International Art English Using Huggingface Inference API"
date = "2023-12-20T12:00:00-00:00"
+++

### Pixel Diagnose: 
##### Similarity Search for Brain Tumor Diagnoses
<br><br>

{{< youtube id="h0586aNJ2gs?si=4uPInwLhApI-LCpq" >}}

---

This is the final project of my data science education, an innovative application specifically designed for radiologists. It allows them to upload an MRI image of a brain tumor and view the most visually similar images from a variety of tumor diagnoses. This feature helps radiologists in making more accurate differential diagnoses. We utilized online datasets of brain tumor patients, which required extraction and preprocessing from extensive databases. Our process began with experimenting with various pre-trained models, and then we developed our own Convolutional Neural Network (CNN) from scratch, incorporating triplet loss. We used this model to generate vector embeddings that are stored in our Qdrant vector database. The application creates vector embeddings from the input images and performs a similarity search in the Qdrant database to identify the most similar images. These images are retrieved from our cloud storage and displayed in the app, which is designed to run locally.<br><br> (Full article coming soon) [See on Github](https://github.com/pixel-diagnose) and [download Docker image for Demo](https://hub.docker.com/r/mkstatistics/pixel-diagnose-demo).

