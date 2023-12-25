import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import { projectStorage, projectFirestore, timestamp } from '../firebase';
import { Card, Container } from "@material-ui/core";
import '../Pages/posts.css'
import { AiFillFolderOpen } from "react-icons/ai";
import ProgressBar from './ProgressBar';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { Button } from "@material-ui/core";
import moment from 'moment'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const useStylesReddit = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

function RedditTextField(props) {
    const classes = useStylesReddit();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const UploadForm = () => {


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState("");
    const [headline, setValue] = useState("");
    const types = ['image/png', 'image/jpeg'];
    const collectionRef = projectFirestore.collection('news');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };
    const handleSubmit = (e) => {
        const uploadTask = projectStorage.ref(`news/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                projectStorage
                    .ref("news")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {

                        setUrl(url)
                    })
            }
        )
        const createdAt = moment().format('MMMM Do YYYY');
        collectionRef.add({ url , createdAt , headline});
    }
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <center>
            <div className="posts">
                <Card className="news-card" elevation={3}>
                    <br /><br />
                    <center>
                        <div className="Newsdiv">
                            <div>
                                <Container >
                                    <center>
                                        <p>Upload your files</p>
                                        <p1>File should be png/jpg</p1><br /><br /><br /></center>
                                </Container>
                                <Container className="fileupload" container justify="center" style={{ borderStyle: 'dashed', borderWidth: 2, borderRadius: 20, width: '300px', height: '200px' }}>
                                    <AiFillFolderOpen onClick={handleClick} />
                                    <input type="file" onChange={handleChange} style={{ display: 'none' }} ref={hiddenFileInput}></input>
                                </Container>
                                <br />
                                <hr />
                                <form className={classes.root} noValidate onSubmit={handleSubmit}>
                                    <div className="healinesubmit" >
                                        <CssTextField className={classes.margin} id="custom-css-standard-input" label="Headline" onChange={(e) => setValue(e.target.value)} value={headline} />
                                        <Button type="submit" variant="outlined">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </center>
                </Card>


<div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>


            </div>
        </center>

    );
}

export default UploadForm;