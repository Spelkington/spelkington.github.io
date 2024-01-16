"use strict";(self.webpackChunkchaotic_good_software_blog=self.webpackChunkchaotic_good_software_blog||[]).push([[333],{931:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return h}});var a=n(1151),r=n(7294);function o(e){const t=Object.assign({p:"p",em:"em",a:"a",img:"img",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Look at that - a whole blog, just for me! At this rate, the last thing I need to do to be a ",r.createElement(t.em,null,"real")," tech guru is start a podcast."),"\n",r.createElement(t.p,null,"I’m starting this page as a place to talk about my cool projects, dumb thoughts, and other odds-and-ends aspects about my life and work."),"\n",r.createElement(t.p,null,"To set the tone, here’s a quick code function to find ",r.createElement(t.a,{href:"https://xkcd.com/2435/"},"the geomethic meandian")," of a set of numbers in Python - in case the need ever arises."),"\n",r.createElement(t.img,{src:"https://imgs.xkcd.com/comics/geothmetic_meandian.png",alt:""}),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-py"},"import numpy as np\n\ndef geothmetic_meandian(\n    numbers: np.array,\n    error: float = 10e-5\n):\n    '''Find the geothmetic meandian of a set of numbers.'''\n\n    # If all the numbers are close to the same, return the first number\n    if sum(np.abs(numbers - numbers[0])) < error:\n        return numbers[0]\n    else:\n        # Recursively call the geomethic meandian until the numbers converge\n        return geothmetic_meandian(np.array([\n            np.average(numbers),\n            np.product(np.power(numbers, 1 / len(numbers))),\n            np.median(numbers)\n        ]), error)\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,">>> geothmetic_meandian([1, 1, 2, 3, 5])\n2.089\n")),"\n",r.createElement(t.p,null,"Voila!"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},m=n(5725),l=n(3972),i=n(4802),s=n(6625),u=n(1619),p=n(8738);const d=e=>{var t;let{data:n,location:a}=e;const o=n.mdx,c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(u.Z,{location:a,title:c},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement(m.ZP,{item:!0,xs:12,textAlign:"center"},r.createElement(l.Z,{variant:"h2",itemProp:"headline"},o.frontmatter.title),r.createElement(l.Z,{variant:"subtitle2",marginBottom:"2rem"},o.frontmatter.date),r.createElement(s.Z,{tags:o.frontmatter.public_tags}))),r.createElement("section",{itemProp:"articleBody"},r.createElement(m.ZP,{item:!0,xs:12,marginTop:3},r.createElement(i.ZP,{overrides:{h1:{component:l.Z,props:{variant:"h3"}},h2:{component:l.Z,props:{variant:"h4"}},h3:{component:l.Z,props:{variant:"h5"}},p:{component:l.Z,props:{variant:"body1",gutterBottom:!1}}}},o.body)))))};function h(e){return r.createElement(d,e,r.createElement(c,e))}const g=e=>{let{data:t}=e;const n=t.mdx;let a=n.frontmatter.description||n.excerpt;if(n&&n.frontmatter.public_tags){const e=n.frontmatter.public_tags;let t=e.slice(0,e.length-1).join(", ");t=t+", and "+e[e.length-1]+"!",t=t.toLocaleLowerCase(),a+="\n\nHop in for a maybe-useful, maybe-unhinged read about "+t}return r.createElement(r.Fragment,null,r.createElement("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),r.createElement(p.Z,{title:t.mdx.frontmatter.title,description:a}),";")}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-home-runner-work-spelkington-github-io-spelkington-github-io-content-blog-hello-blog-index-mdx-fd448ab009e659d52ba9.js.map