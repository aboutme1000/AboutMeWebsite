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
                <div>
                    <text className="text">
                        computer scientist<br></br>
                        java, c++, python<br></br>
                        cu boulder 2026<br></br>
                    </text>
                </div>
                <div id="links" className="links">
                    <text className="arrows">&gt; </text>
                    <a href="https://www.linkedin.com/feed/">linkedin<br></br></a>
                    <text className="arrows">&gt; </text>
                    <a href="https://twitter.com/ari_goldman_">tweets<br></br></a>
                    <text className="arrows">&gt; </text>
                    <a href="https://github.com/ari-goldman">github<br></br></a>
                    
                </div>
            </body>
            <footer>
                <div>
                    <h1 className="name">
                        ari_goldman
                    </h1>
                </div>
            </footer>
        </main>

        <style jsx>{`

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
            font-size: 5vw;
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
            font-size: 5vw;
            position: absolute;
            color: #262b44;
            bottom: -6vh;
            right: 100px;
            
        }
        `}</style>

        <style jsx global>{`
        `}</style>
      </div>
      </html>
    );
}

