# FeedbackHub - Site Web Marketing

Site web marketing professionnel pour FeedbackHub, un SaaS de gestion de feedback client pour produits numériques.

## 🚀 Aperçu

FeedbackHub est une plateforme qui permet aux équipes produit de collecter, prioriser et agir sur les retours utilisateurs via un widget intégré élégant et simple.

## 📁 Structure du projet

```
feedbackhub-website/
├── index.html              # Page d'accueil
├── css/
│   └── styles.css          # Styles globaux avec design system
├── js/
│   └── main.js            # JavaScript pour interactivité
├── pages/
│   ├── features.html      # Page fonctionnalités détaillées
│   ├── pricing.html       # Page tarification
│   ├── documentation.html # Page documentation technique
│   ├── about.html         # Page à propos
│   └── contact.html       # Page contact
├── images/                # Images et assets (à ajouter)
└── README.md
```

## 🎨 Design System

### Couleurs
- **Primaire**: `#2563EB` (Bleu)
- **Secondaire**: `#7C3AED` (Violet)
- **Accent**: `#10B981` (Vert)
- **Neutres**: Gamme de gris du #1E293B au #F8FAFC

### Typographie
- **Police principale**: Inter (Google Fonts)
- **Tailles**: Responsive avec échelle harmonieuse
- **Poids**: 400, 500, 600, 700

### Composants
- Système de grille responsive (2, 3, 4 colonnes)
- Boutons avec états hover et animations
- Cartes avec effets d'élévation
- Modales pour le widget et la vidéo démo
- Accordéon FAQ
- Formulaires stylisés

## ✨ Fonctionnalités

### Page d'accueil (index.html)
- ✅ Hero section avec CTA principal
- ✅ Section problème/solution
- ✅ Fonctionnalités clés (6 cartes)
- ✅ Timeline "Comment ça marche"
- ✅ Témoignages clients
- ✅ Statistiques d'impact
- ✅ Aperçu tarification
- ✅ FAQ accordéon
- ✅ Widget de feedback fonctionnel (démo)
- ✅ Modale vidéo démo

### Page Fonctionnalités
- ✅ Liste complète des fonctionnalités
- ✅ Fonctionnalités avancées détaillées
- ✅ Section intégrations avec logos

### Page Tarification
- ✅ 3 plans (Starter, Pro, Enterprise)
- ✅ Tableau comparatif détaillé
- ✅ FAQ spécifique aux tarifs

### Page Documentation
- ✅ Guide de démarrage rapide (3 étapes)
- ✅ Exemples d'intégration par framework (React, Vue, Angular)
- ✅ Documentation API REST
- ✅ Webhooks
- ✅ Liens vers ressources

### Page À propos
- ✅ Histoire de l'entreprise
- ✅ Mission et valeurs
- ✅ Présentation de l'équipe
- ✅ Statistiques de croissance

### Page Contact
- ✅ Formulaire de contact fonctionnel
- ✅ Informations de contact (email, support, ventes)
- ✅ Temps de réponse
- ✅ FAQ contact

## 🛠️ Technologies

- **HTML5**: Structure sémantique
- **CSS3**: Design system moderne avec variables CSS
- **JavaScript Vanilla**: Interactivité sans dépendances
- **Lucide Icons**: Bibliothèque d'icônes SVG
- **Google Fonts**: Inter

## 🎯 Optimisations

### Performance
- ✅ Images lazy loading
- ✅ Animations CSS optimisées
- ✅ Code minifiable
- ✅ Chargement asynchrone des icônes

### SEO
- ✅ Meta tags optimisés
- ✅ Structure H1-H6 sémantique
- ✅ Alt text sur toutes les images
- ✅ Open Graph tags
- ✅ Descriptions uniques par page

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: 480px, 768px, 1024px
- ✅ Navigation mobile avec menu burger
- ✅ Grids adaptatifs
- ✅ Typographie responsive

### Accessibilité
- ✅ Contraste des couleurs WCAG AA
- ✅ Navigation au clavier
- ✅ ARIA labels sur les icônes
- ✅ Formulaires avec labels explicites

## 🚀 Déploiement

### Option 1: Hébergement statique
Uploadez simplement tous les fichiers sur :
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Option 2: Serveur web classique
Copiez les fichiers dans le dossier public de votre serveur (Apache, Nginx, etc.)

### Configuration SSL
Assurez-vous d'avoir un certificat SSL configuré (Let's Encrypt recommandé).

## 📝 Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/styles.css` :
```css
:root {
    --primary: #2563EB;
    --secondary: #7C3AED;
    --accent: #10B981;
}
```

### Logo
Remplacez le SVG du logo dans la navigation et le footer.

### Contenu
Tous les textes sont directement dans les fichiers HTML pour faciliter la modification.

## 🔧 Développement

Aucune compilation nécessaire. Ouvrez simplement `index.html` dans un navigateur pour prévisualiser.

Pour un serveur de développement local :
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

## 📊 Analytics

Pour ajouter Google Analytics, ajoutez ce code avant `</head>` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Assets à ajouter

Pour un site production-ready, ajoutez :
- [ ] Logo SVG haute résolution
- [ ] Favicon (16x16, 32x32, 180x180)
- [ ] Screenshots du dashboard
- [ ] Photos d'équipe réelles
- [ ] Vidéo démo (ou intégration YouTube/Vimeo)
- [ ] Images optimisées WebP

## 📞 Support

Pour toute question sur ce template :
- Email: contact@feedbackhub.com
- Documentation: /pages/documentation.html

## 📄 Licence

© 2025 FeedbackHub. Tous droits réservés.

---

**Fait avec ❤️ pour les product builders**
