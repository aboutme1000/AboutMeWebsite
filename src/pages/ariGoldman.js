function hello() {
    alert("hello");
}

export default function examplePage() {
    return (
      <html>
      <div className='.container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        <head>
            <link href="https://fonts.googleapis.com/css?family=Fragment+Mono" rel="stylesheet"/>
        </head>
        

        <main>
            <body>
                <div className="text">
                    <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">computer scientist</a>
                    <br></br>
                    <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">java</a>
                    <text>, </text>
                    <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">c++</a>
                    <text>, </text>
                    <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">python</a>
                    <br></br>
                    <a href="https://www.colorado.edu/" target="_blank">cu boulder 2026</a>
                    <br></br>
                    

                </div>
                <div id="links" className="links">
                    <text className="arrows">&gt; </text>
                    <a href="https://www.linkedin.com/feed/" target="_blank">linkedin<br></br></a>
                    <text className="arrows">&gt; </text>
                    <a href="https://twitter.com/ari_goldman_" target="_blank">tweets<br></br></a>
                    <text className="arrows">&gt; </text>
                    <a href="https://github.com/ari-goldman" target="_blank">github<br></br></a>
                    <text className="arrows">&gt; </text>
                    <a href="mailto:agoldman018@gmail.com" target="_blank">email</a>
                    
                </div>
            </body>
            <footer>
                <div className="name">
                    <a className="name" href="mailto:agoldman018@gmail.com" target="_blank">
                        ari_goldman
                    </a>
                </div>
            </footer>
        </main>

        <style jsx>{`

        ::selection {
            background: #3a4466;
        }

        h1 {
            font-size: 50px;
            text-align: center;
            font-family: "Fragment Mono";
        }

        body {
            background-image: URL('https://i.ibb.co/0GtPzrn/background.png');
            background-size: 100vw 100vh
            
        }

        a {
            font-family: "Fragment Mono";
            color: #f77622;
            text-decoration: none;
        }

        a:hover, a:active {
            color: #e43b44;
        }

        .links {
            font-size: 5vw;
            text-align: left;
            font-weight: bold;
            float: left;

        }

        .text {
            font-family: "Fragment Mono";
            float: right;
            font-size: 4vw;
            color: #f77622;
            text-align: right;
            font-weight: bold;
        }

        .arrows {
            color: #9e2835
        }

        .name {
            font-size: 3vw;
            position: absolute;
            color: #262b44;
            bottom: 0.1vw;
            right: 8vw;
            
        }
        `}</style>

        <style jsx global>{`
        `}</style>
      </div>
      </html>
    );
}

