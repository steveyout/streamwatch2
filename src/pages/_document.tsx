import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body>
        <Main/>
        <NextScript/>
        {/* Google tag (gtag.js)*/}
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NZ1TSJM2KD"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NZ1TSJM2KD');
            `}
        </Script>

        {/*
         <Script data-cfasync="false" strategy="afterInteractive">
            {`

           (function(){var i=window,p="ff04bed514e0b65a7e438197e1137c95",a=[["siteId",158+668+987+5108671],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],z=["d3d3LmJsb2NrYWRzbm90LmNvbS9CL2JjdGEubWluLmpz","ZG5oZmk1bm4yZHQ2Ny5jbG91ZGZyb250Lm5ldC9FWGlhL3B5YnRNRC9oZHJhd2VyLm1pbi5jc3M=","d3d3LnRvemJvaGpjdHdyaS5jb20vR29JL2JjdGEubWluLmpz","d3d3LmlrdnBsenRyZnEuY29tL3ZpdGsvWC9hZHJhd2VyLm1pbi5jc3M="],c=-1,q,l,h=function(){clearTimeout(l);c++;if(z[c]&&!(1749028238000<(new Date).getTime()&&1<c)){q=i.document.createElement("script");q.type="text/javascript";q.async=!0;var n=i.document.getElementsByTagName("script")[0];q.src="https://"+atob(z[c]);q.crossOrigin="anonymous";q.onerror=h;q.onload=function(){clearTimeout(l);i[p.slice(0,16)+p.slice(0,16)]||h()};l=setTimeout(h,5E3);n.parentNode.insertBefore(q,n)}};if(!i[p]){try{Object.freeze(i[p]=a)}catch(e){}h()}})();
            `}
          </Script>
          */}


        <Script async strategy="afterInteractive" src="//acscdn.com/script/aclib.js"></Script>
        <Script data-cfasync="false" strategy="lazyOnload">
            {`
             aclib.runPop({
        zoneId: '9033646',
    });
             `}
        </Script>



        <Script data-cfasync="false" strategy="afterInteractive">
            {`
           atOptions = {
'key' : '2af5858151ac603b89700fdca8d640f7',
'format' : 'iframe',
'height' : 600,
'width' : 160,
'params' : {}
};
            `}
        </Script>

        <Script data-cfasync="false" strategy="afterInteractive"
                src="//patronagemaestroforestall.com/2af5858151ac603b89700fdca8d640f7/invoke.js"></Script>
        <Script type="text/javascript">
            {`
            atOptions = {
'key' : '961d025281d74b4322edc36aac08b498',
'format' : 'iframe',
'height' : 60,
'width' : 468,
'params' : {}
};
        `}
        </Script>
        <Script type="text/javascript" src="//patronagemaestroforestall.com/961d025281d74b4322edc36aac08b498/invoke.js"></Script>
        </body>
    </Html>
  );
}
