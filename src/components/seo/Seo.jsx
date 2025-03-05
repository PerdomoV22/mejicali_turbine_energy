import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

function Seo({ title, description }) {
    const [currentTitle, setCurrentTitle] = useState(title);

    useEffect(() => {
        document.title = `MTE - ${title}`;
        setCurrentTitle(title);
    }, [title]);

    return (
        <Helmet key={title}> 
            <title>{`MTE - ${currentTitle}`}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
}

export default Seo;



