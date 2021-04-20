import { useState, useEffect } from 'react'
import axios from 'axios'
import Select, { components } from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import Breadcrumbs from '@components/breadcrumbs'
import { EditorState, ContentState } from 'draft-js'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const BlogEdit = () => {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  })

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }
  
  const rows = [
    createData('Mathematics'),
    createData('Science'),
    createData('English'),
    createData('Sinhala'),
    createData('Buddhism')
  ]

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  const [data, setData] = useState(''),
  [assignee, setAssignee] = useState({ value: 'pheobe', label: 'Pheobe Buffay' }),
    [title, setTitle] = useState(''),
    [slug, setSlug] = useState(''),
    [status, setStatus] = useState(''),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState('banner.jpg')

    const assigneeOptions = [
      { value: 'pheobe', label: 'Pheobe Buffay'},
      { value: 'chandler', label: 'Chandler Bing'},
      { value: 'ross', label: 'Ross Geller'},
      { value: 'monica', label: 'Monica Geller'},
      { value: 'joey', label: 'Joey Tribbiani'},
      { value: 'Rachel', label: 'Rachel Green'}
    ]
    const AssigneeComponent = ({ data, ...props }) => {
      return (
        <components.Option {...props}>
          <Media className='align-items-center'>
            <Media body>
              <p className='mb-0'>{data.label}</p>
            </Media>
          </Media>
        </components.Option>
      )
    }

  useEffect(() => {
    axios.get('/blog/list/data/edit').then(res => {
      setData(res.data)
      setTitle(res.data.blogTitle)
      setSlug(res.data.slug)
      setBlogCategories(res.data.blogCategories)
      setFeaturedImg(res.data.featuredImage)
      setStatus(res.data.status)
    })
  }, [])

  const categories = [
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'english', label: 'English' },
    { value: 'sinhala', label: 'Sinhala' },
    { value: 'music', label: 'Music' }
  ]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const classes = useStyles()

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='Add Subjects'
        breadCrumbParent='Subjects'
        breadCrumbActive='Add Subjects'
      />
      {data !== null ? (
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                {/* <Media>
                  <Avatar className='mr-75' img={data.avatar} width='38' height='38' />
                  <Media body>
                    <h6 className='mb-25'>{data.userFullName}</h6>
                    <CardText>{data.createdTime}</CardText>
                  </Media>
                </Media> */}
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                   
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-category'>Subjects</Label>
                        <Input
                          id='blogs-edit-categories'
                          isClearable={false}
                          theme={selectThemeColors}
                          // value={blogCategories}mathematics
                          isMulti
                          name='colors'
                          onChange={data => setBlogCategories(data)}
                        />
                      </FormGroup>
                    </Col>
                    <br/>
                    <Col className='mt-50'  style={{position: 'relative', top: 15}}>
                      <Button.Ripple color='primary' className='mr-1'>
                        Add Subjects
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Cancel
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize: 20, fontWeight: 'bold', color : 'rgba(0,0,0,0.6)'}}>Subjects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{fontSize: 14, fontFamily: "revert" }} component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default BlogEdit
