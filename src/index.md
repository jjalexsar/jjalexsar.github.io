---
layout: base.njk
title: Home
---

## Blog Posts

{% for post in collections.all %}

<article>
    <a href="{{ post.url | url }}">{{ post.data.title }}</a>

    {% if post.data.image %}
        <img src="{{ post.data.image }}" alt="{{ post.data.title }}" width="250">
    {% endif %}
</article>
<br>
{% endfor %}