---
title: Why is Next.js so HOT🔥
date: "2022-05-29"
legacyID: "2022-05-29-why-is-nextjs-so-hot"
imageUrl: "https://www.hostnextra.com/kb/wp-content/uploads/2020/12/easy-to-install-next-js-on-ubuntu-20-04.jpg"
published: true
tags:
---
## What is Next.js? 
Next.js is an open-source framework for creating universal React applications. By framework, I mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

## What makes Next.js powerful? 
Traditional react applications are rendered client-side. That means when a user lands on your website, the user's browser starts with only a *template* of an html page. This template has no rendered content in it. The Browser then needs to fetch the javascript file containing the react code. From there, the browser renders the content to the page. One drawback would be that it can take longer to reach the first contentful page.

Next.js provides an out-of the box solution for server-side rendering, so that the content can be rendered in advance. That means the user sees the fully rendered html first. When the initial page is received, client-side takes over and the application functions as a traditional react application. 

Next.js has multiple rendering strategies. All of them can come into play in one single application. Those strategies will be presented in the coming sections.

#### Server-side Rendering
All pages are rendered at request time. This rendering strategy is ideal for applications where data is changing rapidly. That means the client will fetch the latest data from the server on each request. Using Next.js every component can implement a function called `getServerSideProps` which is called every time a request comes in. 

Here is a simple implementation showing data fetching and returning that data as props.
```js
export async function getServerSideProps() {
  const req = await fetch("/dog-api");
  const dog = await req.json();

  return {
    props: { dog },
  };
}

```


This would be how a component would use the data that was fetched.
```js
export default function Dog({ dog }) {
  return <h1>{dog.name}</h1>;
}
```

#### Static Site Generation
All pages are rendered at build time. This strategy is good for any kind of app which doesn't have changing data that often; for instance, a blog. Just like previously each component can implement a function called `getStaticProps` which is called at every build.

To provide an example I'll refer to the example in section _Server-side Rendering_ where `getServerSideProps` can be switched out with `getStaticProps` and usage will still be the same. 


#### Incremental Static Regeneration 
All pages are regenerated on the fly based after the defined time. This is something between the previously mentioned strategies(SSR and SSG). The idea is that you want to `getStaticProps` then revalidate after a given time.

Here's a simple implementation of `getStaticProps` including a revalidate property that triggers every 60 secs. 

```js
export async function getStaticProps() {
  const req = await fetch("/dog-api");
  const dog = await req.json();

  return {
    props: { dog },
    revalidate: 60 
  };
}
```

## What's in it for you?

Although Next.js might be less easy to implement, it allows for faster rendering. Also, the content of a traditional application that renders client side is not reliably indexed by all search bots or search engines. Therefore you'll be missing out on hits. So, before you go ahead and build your frontend, you gotta ask yourself if speed and SEO is of the essence.

