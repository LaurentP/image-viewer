# Image Viewer

C'est une visionneuse d'images en JavaScript qui permet également la navigation entre chaque élément associé.

![Screenshot](/screenshot.png)

## Utilisation

Il suffit de lier le fichier image-viewer.js dans votre code HTML afin de l'utiliser. Il n'y a pas de fichier CSS nécessaire, tout est dans le fichier JavaScript compilé.

Aucun type de balise particulier n'est obligatoire. Seulement la classe .image-viewer-item doit être correctement associée à la balise qui entoure l'image.

Exemple pour une seule image :

```html
<div class="image-viewer-item">
    <img src="./img/photo.jpg" alt="Photo">
</div>
```

Exemple pour plusieurs images :

```html
<ul>
    <li class="image-viewer-item">
        <img src="./img/photo-1.jpg" alt="Photo 1">
    </li>
    <li class="image-viewer-item">
        <img src="./img/photo-2.jpg" alt="Photo 2">
    </li>
    <li class="image-viewer-item">
        <img src="./img/photo-3.jpg" alt="Photo 3">
    </li>
</ul>
```

## À propos

Les photos utilisées pour la démonstration viennent de la banque d'images libres de droit [Unsplash](https://unsplash.com).