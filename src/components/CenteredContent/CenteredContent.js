import './CenteredContent.css';

function CenteredContent(props)
{
    return (
        <>
            <div className="centered_content">{props.children}</div>
        </>
    );
}

export default CenteredContent;