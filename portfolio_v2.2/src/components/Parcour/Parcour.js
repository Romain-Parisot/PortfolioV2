import React from 'react';
// import styles from './Parcour.module.css';
import BulletPointParcour from './BulletPointParcour/BulletPointParcour';

export default function Parcour() {
  const bulletPoints = [];

  for (let i = 0; i < 4; i += 1) {
    bulletPoints.push(<BulletPointParcour key={i} index={i} />);
  }

  return (
    <section id="parcour">
      {bulletPoints}
      {/* <h2>Mon parcour :</h2>
      <div class="divtimeline">
        <svg id="parcour_svg">
          <rect id="parcour_bar_svg" />
          <rect id="parcour_bar_svg2" />
        </svg>

        <div class="parcour_elmt parcour_elmt_left parcour_elmt1">
          <div class="parcour_elmt_child">
            <h3>
              Étudiant en Coding & Digital Innovation a l'
              <a href="https://www.iim.fr/" target="_blank">
                IIM
              </a>
            </h3>
            <div class="parcour_elmt_details">
              <p>- Socle en Coding, Creation & Design, Communication Digital & e-Business. (1ans)</p>
              <a href="https://www.iim.fr/cursus/bachelor-premiere-annee/" target="_blank">
                Listes des compétences ici.
              </a>
              <p>- Préparation au Bachelor "Chef de projet digital". (2ans)</p>
              <a href="https://www.iim.fr/cursus/bachelor-coding-digital-innovation/" target="_blank">
                Listes des compétences ici.
              </a>
              <p>- Préparation au Master "Management de la Transformation Digitale". (2ans)</p>
              <a href="https://www.iim.fr/cursus/mastere-management-transformation-digitale/" target="_blank">
                Listes des compétences ici.
              </a>
            </div>
            <p class="parcour_elmt_date">Septembre/2021 - Août/2026</p>
          </div>
        </div>
        <div class="parcour_elmt parcour_elmt_right parcour_elmt2">
          <div class="parcour_elmt_child"></div>
        </div>
        <div class="parcour_elmt parcour_elmt_left parcour_elmt3">
          <div class="parcour_elmt_child">
            <h3>
              Dévellopeur chez{' '}
              <a href="https://groupe-coriance.fr/" target="_blank">
                Coriance
              </a>{' '}
              - Stage
            </h3>
            <div class="parcour_elmt_details">
              <p>- Développement d'application de gestion avec Power Apps.</p>
              <p>- Automatisation de process avec Power Automate.</p>
              <p>- Création de sites et bases de données sur SharePoint.</p>
              <p>- Réalisation de dashboards sur Power Bi</p>
            </div>
            <p class="parcour_elmt_date">Mai/2023 - Juillet/2023</p>
          </div>
        </div>
        <div class="parcour_elmt parcour_elmt_right parcour_elmt4">
          <div class="parcour_elmt_child">
            <h3>
              Dévellopeur web & logiciel chez{' '}
              <a href="https://www.altusgroup.com/" target="_blank">
                Altus group
              </a>{' '}
              - Alternance
            </h3>
            <div class="parcour_elmt_details">
              <p>- Développement d'applications micro-frontend en React.</p>
              <p>- Développement de micro-services en Python.</p>
              <p>- Déploiement et configuration des applications sur AWS.</p>
              <p>
                - Développement, maintenance et déploiement de composants React pour le Design System du groupe Altus.
              </p>
            </div>
            <p class="parcour_elmt_date">Septembre/2023 - Toujours en activité</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
