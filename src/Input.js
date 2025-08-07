import './Input.css'
import './Input2.css'
import { useState } from 'react';
function Input() {
    // declaring usestates
    const [targetCGPA, setTargetCGPA] = useState();
    const [gpaHistory, setGpaHistory] = useState();
    const [unitsHistory, setUnitsHistory] = useState();
    const [response, setResponse] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [sem4, setsem4] = useState('semes1');
    const [sem5, setsem5] = useState('semes1 rem5');
    const [sem6, setsem6] = useState('semes1 rem6');
    const [err, seterr] = useState('');
    const [err1, seterr1] = useState('');
    const [err2, seterr2] = useState('');
    const [err3, seterr3] = useState('');
    const [err4, seterr4] = useState('');
    const [err5, seterr5] = useState('');
    const [err6, seterr6] = useState('');
    const [err7, seterr7] = useState('');
    const [err8, seterr8] = useState('');
    const [err9, seterr9] = useState('');
    const [err10, seterr10] = useState('');
    const [err11, seterr11] = useState('');
    const [err12, seterr12] = useState('');
    const [target, settarget] = useState()
    // getting the values of the inputs
    const [val1, setval1] = useState(0);
    const [val1a, setval1a] = useState(0);
    const [val2, setval2] = useState(0);
    const [val2a, setval2a] = useState(0);
    const [val3, setval3] = useState(0);
    const [val3a, setval3a] = useState(0);
    const [val4, setval4] = useState(0);
    const [val4a, setval4a] = useState(0);
    const [val5, setval5] = useState(0);
    const [val5a, setval5a] = useState(0);
    const [val6, setval6] = useState(0);
    const [val6a, setval6a] = useState(0);
    const [val7, setval7] = useState(0);
    const [val7a, setval7a] = useState(0);
    const [val8, setval8] = useState(0);
    const [val8a, setval8a] = useState(0);
    const [val9, setval9] = useState(0);
    const [val9a, setval9a] = useState(0);
    const [val10, setval10] = useState(0);
    const [val10a, setval10a] = useState(0);
    const [val11, setval11] = useState(0);
    const [val11a, setval11a] = useState(0);
    const [val12, setval12] = useState(0);
    const [val12a, setval12a] = useState(0);

    const check = () => {
        if (isChecked === false) {
            setIsChecked(true);
            setIsChecked1(false);
            setIsChecked2(false);
            setsem4('semes1');
            setsem5('semes1 rem5');
            setsem6('semes1 rem6');
        } 
        else {
            setIsChecked(false);
            // make all disapppear
            setsem4('semes1 rem4');
            setsem5('semes1 rem5');
            setsem6('semes1 rem6');
        }
    }
    const check1 = () => {
        if (isChecked1 === false) {
            setIsChecked1(true);
            setIsChecked(false);
            setIsChecked2(false);
            setsem4('semes1');
            setsem5('semes1');  
            setsem6('semes1 rem6');
        } 
        else {
            setIsChecked1(false);
            setIsChecked(true);
            setsem5('semes1 rem5');
        }
    }
    const check2 = () => {
        if (isChecked2 === false) {
            setIsChecked2(true);
            setIsChecked(false);
            setIsChecked1(false);
            setsem4('semes1');
            setsem5('semes1');  
            setsem6('semes1');
        } 
        else {
            setIsChecked2(false);
            setIsChecked(true);
            setsem5('semes1 rem5');
            setsem6('semes1 rem6');
        }
    }

    const getval1handler = (e) => {
        const val_1 = Number(e.target.value.trim())
        if (isNaN(val_1)) {
            seterr('error');
        }
        else if (e.target.value.trim() === ''){
            seterr('error');
            setval1(0);
        }
        else {
            seterr('');
            setval1(val_1);
        }
    }
    const getval1ahandler = (e) => {
        const val_1 = Number(e.target.value.trim())
        if (isNaN(val_1)) {
            seterr('error');
        }
        else if (e.target.value.trim() === ''){
            seterr('error');
            setval1a(0);
        }
        else {
            seterr('');
            setval1a(val_1);
        }
    }
    const getval2handler = (e) => {
        const val_2 = Number(e.target.value.trim())
        if (isNaN(val_2)) {
            seterr1('error');
        }
        else if (e.target.value.trim() === ''){
            seterr1('error');
            setval2(0);
        }
        else {
            seterr1('');
            setval2(val_2);
        }
    }
    const getval2ahandler = (e) => {
        const val_2 = Number(e.target.value.trim())
        if (isNaN(val_2)) {
            seterr1('error');
        }
        else if (e.target.value.trim() === ''){
            seterr1('error');
            setval2a(0);
        }
        else {
            seterr1('');
            setval2a(val_2);
        }
    }
    const getval3handler = (e) => {
        const val_3 = Number(e.target.value.trim())
        if (isNaN(val_3)) {
            seterr2('error');
        }
        else if (e.target.value.trim() === ''){
            seterr2('error');
            setval3(0);
        }
        else {
            seterr2('');
            setval3(val_3);
        }
    }
    const getval3ahandler = (e) => {
        const val_3 = Number(e.target.value.trim())
        if (isNaN(val_3)) {
            seterr2('error');
        }
        else if (e.target.value.trim() === ''){
            seterr2('error');
            setval3a(0);
        }
        else {
            seterr2('');
            setval3a(val_3);
        }
    }
    const getval4handler = (e) => {
        const val_4 = Number(e.target.value.trim())
        if (isNaN(val_4)) {
            seterr3('error');
        }
        else if (e.target.value.trim() === ''){
            seterr3('error');
            setval4(0);
        }
        else {
            seterr3('');
            setval4(val_4);
        }
    }
    const getval4ahandler = (e) => {
        const val_4 = Number(e.target.value.trim())
        if (isNaN(val_4)) {
            seterr3('error');
        }
        else if (e.target.value.trim() === ''){
            seterr3('error');
            setval4a(0);
        }
        else {
            seterr3('');
            setval4a(val_4);
        }
    }
    const getval5handler = (e) => {
        const val_5 = Number(e.target.value.trim())
        if (isNaN(val_5)) {
            seterr4('error');
        }
        else if (e.target.value.trim() === ''){
            seterr4('error');
            setval5(0);
        }
        else {
            seterr4('');
            setval5(val_5);
        }
    }
    const getval5ahandler = (e) => {
        const val_5 = Number(e.target.value.trim())
        if (isNaN(val_5)) {
            seterr4('error');
        }
        else if (e.target.value.trim() === ''){
            seterr4('error');
            setval5a(0);
        }
        else {
            seterr4('');
            setval5a(val_5);
        }
    }
    const getval6handler = (e) => {
        const val_6 = Number(e.target.value.trim())
        if (isNaN(val_6)) {
            seterr5('error');
        }
        else if (e.target.value.trim() === ''){
            seterr5('error');
            setval6(0);
        }
        else {
            seterr5('');
            setval6(val_6);
        }
    }
    const getval6ahandler = (e) => {
        const val_6 = Number(e.target.value.trim())
        if (isNaN(val_6)) {
            seterr5('error');
        }
        else if (e.target.value.trim() === ''){
            seterr5('error');
            setval6a(0);
        }
        else {
            seterr5('');
            setval6a(val_6);
        }
    }
    const getval7handler = (e) => {
        const val_7 = Number(e.target.value.trim())
        if (isNaN(val_7)) {
            seterr6('error');
        }
        else if (e.target.value.trim() === ''){
            seterr6('error');
            setval7(0);
        }
        else {
            seterr6('');
            setval7(val_7);
        }
    }
    const getval7ahandler = (e) => {
        const val_7 = Number(e.target.value.trim())
        if (isNaN(val_7)) {
            seterr6('error');
        }
        else if (e.target.value.trim() === ''){
            seterr6('error');
            setval7a(0);
        }
        else {
            seterr6('');
            setval7a(val_7);
        }
    }
    const getval8handler = (e) => {
        const val_8 = Number(e.target.value.trim())
        if (isNaN(val_8)) {
            seterr7('error');
        }
        else if (e.target.value.trim() === ''){
            seterr7('error');
            setval8(0);
        }
        else {
            seterr7('');
            setval8(val_8);
        }
    }
    const getval8ahandler = (e) => {
        const val_8 = Number(e.target.value.trim())
        if (isNaN(val_8)) {
            seterr7('error');
        }
        else if (e.target.value.trim() === ''){
            seterr7('error');
            setval8a(0);
        }
        else {
            seterr7('');
            setval8a(val_8);
        }
    }
    const getval9handler = (e) => {
        const val_9 = Number(e.target.value.trim())
        if (isNaN(val_9)) {
            seterr8('error');
        }
        else if (e.target.value.trim() === ''){
            seterr8('error');
            setval9(0);
        }
        else {
            seterr8('');
            setval9(val_9);
        }
    }
    const getval9ahandler = (e) => {
        const val_9 = Number(e.target.value.trim())
        if (isNaN(val_9)) {
            seterr8('error');
        }
        else if (e.target.value.trim() === ''){
            seterr8('error');
            setval9a(0);
        }
        else {
            seterr8('');
            setval9a(val_9);
        }
    }
    const getval10handler = (e) => {
        const val_10 = Number(e.target.value.trim())
        if (isNaN(val_10)) {
            seterr9('error');
        }
        else if (e.target.value.trim() === ''){
            seterr9('error');
            setval10(0);
        }
        else {
            seterr9('');
            setval10(val_10);
        }
    }
    const getval10ahandler = (e) => {
        const val_10 = Number(e.target.value.trim())
        if (isNaN(val_10)) {
            seterr9('error');
        }
        else if (e.target.value.trim() === ''){
            seterr9('error');
            setval10a(0);
        }
        else {
            seterr9('');
            setval10a(val_10);
        }
    }
    const getval11handler = (e) => {
        const val_11 = Number(e.target.value.trim())
        if (isNaN(val_11)) {
            seterr10('error');
        }
        else if (e.target.value.trim() === ''){
            seterr10('error');
            setval11(0);
        }
        else {
            seterr10('');
            setval11(val_11);
        }
    }
    const getval11ahandler = (e) => {
        const val_11 = Number(e.target.value.trim())
        if (isNaN(val_11)) {
            seterr10('error');
        }
        else if (e.target.value.trim() === ''){
            seterr10('error');
            setval11a(0);
        }
        else {
            seterr10('');
            setval11a(val_11);
        }
    }
    const getval12handler = (e) => {
        const val_12 = Number(e.target.value.trim())
        if (isNaN(val_12)) {
            seterr11('error');
        }
        else if (e.target.value.trim() === ''){
            seterr11('error');
            setval12(0);
        }
        else {
            seterr11('');
            setval12(val_12);
        }
    }
    const getval12ahandler = (e) => {
        const val_12 = Number(e.target.value.trim())
        if (isNaN(val_12)) {
            seterr11('error');
        }
        else if (e.target.value.trim() === ''){
            seterr11('error');
            setval12a(0);
        }
        else {
            seterr11('');
            setval12a(val_12);
        }
    }
    const gettargethandler = (e) => {
        const val_13 = Number(e.target.value.trim())
        if (isNaN(val_13)) {
            seterr12('errorr');
        }
        else if (e.target.value.trim() === ''){
            seterr12('errorr');
            settarget(0);
        }
        else {
            seterr12('');
            settarget(val_13);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setTargetCGPA(target);
        setGpaHistory([val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12]);
        setUnitsHistory([val1a,val2a,val3a,val4a,val5a,val6a,val7a,val8a,val9a,val10a,val11a,val12a]);

        // confirms that this is really due t usestate
        const cgpa = target
        const gpahis  = [val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12]
        const unithis = [val1a,val2a,val3a,val4a,val5a,val6a,val7a,val8a,val9a,val10a,val11a,val12a]

        const findzer0 = gpahis.indexOf(0)
        const findzer1 = unithis.indexOf(0) 
        const gpahistrim = findzer0 !== -1 ? gpahis.slice(0, findzer0) : [...gpahis] ;
        const unithistrim = findzer1 !== -1 ? unithis.slice(0, findzer1) : [...unithis] ;

        console.log('Target CGPA:', cgpa);
        console.log('GPA History:', gpahis);    
        console.log('Units History:', unithis);
        console.log('Trimmed GPA History:',gpahistrim)
        console.log('Trimmed Units History:',unithistrim)

        const len = gpahistrim.length
        const unitleft = unithistrim.slice(len)
        console.log('Unit of uncompleted semesters:',unitleft)
        const unitdone = len !== -1 ? unithistrim.slice(0, len) : [...unithistrim];
        console.log('Unit of completed semesters:',unitdone)
        
        // send data to backend 

            // const formData = {
            // targetCgpa: cgpa,
            // gpaHistory: gpahistrim,
            // cuHistory: unitdone,
            // remainingCu: unitleft,
            // };

            // try {
            // const res = await fetch("https://a5lotvxkhkr8bpon0bemjft8.hooks.n8n.cloud/webhook/b4b559aa-697e-4f4f-8011-76a57d4afc08", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(formData)
            // });

            // const data = await res.json(); // Use .json() if n8n responds with JSON
            // setResult(data);
            // // console.log("Response from n8n:", data);
            // } catch (errs) {
            // setResult("An error occurred while sending the data.");
            // console.error(errs);
            // } finally {
            // setLoading(false);
            // }
        }


    

    return(
        <div className="inputcont" >
            <div className='formcont'>
                <div className='lay1'>
                    <div className='name'>GPACALC</div>
                </div>
                <div className='form' >
                    <div className='targetcgpa' >
                        <div className='targetcgpa_1' >Target CGPA<span className='comp' > *</span></div>
                        <input className='targetcgpa_2' id={err12} onChange={gettargethandler} />
                    </div>
                    <div className='gpahis'>
                        <div className='txt1' >GPA History<span className='comp' > *</span></div>
                        <div className='howto'>Note<br/>Fill in the the GPA up to the semesters you have done and fill in Zero for the rest and click on the 'Get Results' button. As for the units just input all the units of all your semesters both done and the ones remaining.</div>
                        <div className='years'>
                            <div className='noyrs' >Years of Study</div>
                            <div className='yrs1'>
                                <input className='yrs1_1' type='checkbox' value='False' checked={isChecked} onChange={check} />
                                <span className='yrs1_2' >4 years</span>
                            </div>
                            <div className='yrs1'>
                                <input className='yrs1_1' type='checkbox' value='False' checked={isChecked1} onChange={check1}  />
                                <span className='yrs1_2' >5 years</span>
                            </div>
                            <div className='yrs1'>
                                <input className='yrs1_1' type='checkbox' value='False' checked={isChecked2} onChange={check2}  />
                                <span className='yrs1_2' >6 years</span>
                            </div>
                        </div>
                        <div className={sem4} id={err}>Semester 1
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={(getval1handler)} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval1ahandler} /></div>
                        </div>
                        <div className={sem4} id={err1}>Semester 2
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval2handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval2ahandler} /></div>
                        </div>
                        <div className={sem4} id={err2}>Semester 3
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval3handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval3ahandler} /></div>
                        </div>
                        <div className={sem4} id={err3}>Semester 4
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval4handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval4ahandler} /></div>
                        </div>
                        <div className={sem4} id={err4}>Semester 5
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval5handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval5ahandler} /></div>
                        </div>
                        <div className={sem4} id={err5}>Semester 6
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval6handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval6ahandler} /></div>
                        </div>
                        <div className={sem4} id={err6}>Semester 7
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval7handler}  /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval7ahandler} /></div>
                        </div>
                        <div className={sem4} id={err7}>Semester 8
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval8handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval8ahandler} /></div>
                        </div>
                        {/* 5 and 6 years */}
                        <div className={sem5} id={err8}>Semester 9
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval9handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval9ahandler} /></div>
                        </div>
                        <div className={sem5} id={err9}>Semester 10
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval10handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval10ahandler} /></div>
                        </div>
                        {/* 6 years */}
                        <div className={sem6} id={err10}>Semester 11
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval11handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval11ahandler} /></div>
                        </div>
                        <div className={sem6} id={err11}>Semester 12
                            <div className='gpa1' >GPA:<input className='gpa1_1' onChange={getval12handler} /></div>
                            <div className='units1' >Units:<input className='units1_1' onChange={getval12ahandler} /></div>
                        </div>
                    </div>
                </div>
                <div className='lay2' >
                    <button className='submit' onClick={handleSubmit} >Get Analysis</button>
                </div>
            </div>
        </div>
    )
}

export default Input;