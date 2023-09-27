# Image Viewer

C'est une visionneuse d'images en JavaScript légère et performante, simple d'utilisation, n'utilisant pas de librairie additionnelle, et pouvant être intégrée dans tout type de projet. Celle-ci permet également la navigation entre chaque élément associé. Les images se chargent en différé, ce qui permet d'optimiser les performances de la page web concernée.

![Screenshot](/screenshot.png)

## Utilisation

Le fichier JavaScript nécessaire et prêt à l'utilisation se trouve dans le dossier dist. Après l'avoir copié et collé dans un nouveau projet, il doit être inclut juste avant la fermeture du body :

```html
<script src="./image-viewer.js"></script>
```

Exemple pour une seule image :

```html
<div class="image-viewer-item" data-src="./img/photo.jpg" data-alt="Photo"></div>
```

Exemple pour plusieurs images :

```html
<ul>
    <li class="image-viewer-item" data-src="./img/photo-1.jpg" data-alt="Photo 1"></li>
    <li class="image-viewer-item" data-src="./img/photo-2.jpg" data-alt="Photo 2"></li>
    <li class="image-viewer-item" data-src="./img/photo-3.jpg" data-alt="Photo 3"></li>
</ul>
```

## À propos

Les photos utilisées pour la démonstration viennent de la banque d'images libres de droit [Unsplash](https://unsplash.com).