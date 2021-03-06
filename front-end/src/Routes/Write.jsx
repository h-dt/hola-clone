import Navbar from "../components/Navbar";
import styled from 'styled-components'
import { RiNumber1 ,RiNumber2 } from "react-icons/ri";
import { useForm } from "react-hook-form";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Link } from "react-router-dom";
import { WriteDiv } from "../components/DivStyle/Divstyle";
import { WriteTitle } from "../components/Titlestyle/Titlestyle";
import { WriteForm } from "../components/Formstyle/Formstyle";
import { LoginSubmitBtn } from "../components/Btnstyle/Btnstyle";
import { GoHomeBtn } from "../components/Btnstyle/Btnstyle";
import { WriteBtnDiv } from "../components/DivStyle/Divstyle";
import skills from '../components/data/skillList'

const SmallTitle = styled.div`
  font-size: 20px;
  display: flex;
  margin-bottom: 20px;
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props)=>props.theme.fonColor};
  font-weight: bold;
`

const ColumnDiv =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:90%;
  z-index: 2;
`


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};


function Write() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({mode:"onChange"});
  const onSubmitValid=(data)=>{
    Object.assign(data, [skillName])
    reset()
    console.log(data)
  }
  const [skillName, setSkillName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkillName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      <Navbar/>
      <WriteDiv>
        <WriteTitle>
          <RiNumber1 style={{backgroundColor:"orangered" ,borderRadius:"50%", width:"30px",height:"30px",padding:"5px", marginRight:"10px"}}/>
          ???????????? ?????? ????????? ??????????????????.
          </WriteTitle>
          <WriteForm onSubmit={handleSubmit(onSubmitValid)}>
            <SmallTitle>?????? ??????
                <select {...register("selecttitle")}>
                <option value="none" hidden>????????????/?????????</option>
                <option value="????????????">????????????</option>
                <option value="?????????">?????????</option>
              </select>
            </SmallTitle>
            <SmallTitle>?????? ??????
              <select {...register("selectperson")}>
                <option value="none" hidden>?????? ~ 10?????????</option>
                <option value="1???">1???</option>
                <option value="2???">2???</option>
                <option value="3???">3???</option>
                <option value="4???">4???</option>
                <option value="5???">5???</option>
                <option value="6???">6???</option>
                <option value="7???">7???</option>
                <option value="8???">8???</option>
                <option value="9???">9???</option>
                <option value="10???">10???</option>
                <option value="????????????">????????????</option>
              </select>
            </SmallTitle>
            <SmallTitle>?????? ??????
              <select {...register("selectonoff")}>
              <option value="none" hidden>?????????/????????????</option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
              </select>
            </SmallTitle>
            <SmallTitle>?????? ??????
              <select {...register("selectperiod")}>
              <option value="none" hidden>?????? ?????? ~ 6?????? ??????</option>
                <option value="????????????">????????????</option>
                <option value="1??????">1??????</option>
                <option value="2??????">2??????</option>
                <option value="3??????">3??????</option>
                <option value="4??????">4??????</option>
                <option value="5??????">5??????</option>
                <option value="6?????? ??????">6?????? ??????</option>
              </select>
            </SmallTitle>
            <SmallTitle>?????? ?????????
              <input {...register("selectstart")} type="date"/>
            </SmallTitle>
            <SmallTitle>?????? ??????
              <select {...register("selectContact")}>
              <option value="none" hidden>????????????</option>
                <option value="kakaotalk">???????????? ????????????</option>
                <option value="email">Email</option>
                <option value="GoogleForm">GoogleForm</option>
              </select>
            </SmallTitle>
            <SmallTitle>?????? ??????
              <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
                <Select
                  multiple
                  displayEmpty
                  value={skillName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>?????? ????????? ??????????????????</em>;
                    }
                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em>?????? ??????</em>
                  </MenuItem>
                  {skills.map((skill) => (
                    <MenuItem
                      key={skill}
                      value={skill}
                    >
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SmallTitle>
            <SmallTitle>?????? ??? ??????
              <input {...register("selectlink")} type="text" placeholder="????????? ??????????????????"/>
            </SmallTitle>
          <ColumnDiv>
            <WriteTitle>
            <RiNumber2 style={{backgroundColor:"orangered" ,borderRadius:"50%", width:"30px",height:"30px",padding:"5px", marginRight:"10px"}}/>
            ??????????????? ?????? ??????????????????.
            </WriteTitle>
            <SmallTitle>??????
              <input {...register("selectname")} type="text" placeholder="??? ????????? ??????????????????"/>
            </SmallTitle>
            <Editor
              usageStatistics= {false}
              initialValue=" "
              previewStyle="vertical"
              width= "100%"
              height="700px"
              initialEditType="wysiwyg"
              useCommandShortcut={false}
              plugins={[colorSyntax]}
              language="ko-KR"/>
            <WriteBtnDiv>
              <LoginSubmitBtn type="submit" value="??? ??????" style={{ fontWeight: "bolder", width: "150px", height:"70px" ,margin: "37px 20px 20px 20px"}}/>
                <GoHomeBtn>
                  <Link to={{pathname:"/"}} style={{textAlign:"center"}}>
                    ??????
                  </Link>
                </GoHomeBtn>
            </WriteBtnDiv>
          </ColumnDiv>
          </WriteForm>
      </WriteDiv>
    </>
  )
}

export default Write;
