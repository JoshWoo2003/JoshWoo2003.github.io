---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<!-- Preprints first, then accepted papers grouped by year (newest first).
     A paper moves out of Preprints once its abbr changes from "Preprint" to a venue. -->
<h2 class="bibliography">Preprints</h2>
{% bibliography --group_by none --query @*[abbr=Preprint]* %}

{% bibliography --query @*[abbr!=Preprint]* %}

</div>
