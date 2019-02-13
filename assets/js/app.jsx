import React from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Google api key to scrap pages using google search
window.googleApiKey = 'AIzaSyDbISTsl4QP1wblti3INkpSbT9PFiH3muU'
// Layout
class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            spacing: '16',
        }
    }
    onChange(event) {
        console.log(event.target.value)
    }
    render() {
        const { header, content } = this.props
        const { spacing } = this.state
        console.log(this.props)

        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(spacing)}>
                        <Grid key={'grid-one'} item>
                            <Paper className={'content'}>
                                <TextField
                                    id="standard-full-width"
                                    label="Empresa"
                                    style={{ margin: 8 }}
                                    placeholder="Nombre de empresa"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => this.onChange(e)}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
function header () {
    return <div>Header</div>
}

function content () {
    return <div>Content</div>
}

ReactDOM.render(<Layout header={header}  content={content} />, document.getElementById('app'));