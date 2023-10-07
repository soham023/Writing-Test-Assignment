import React from 'react';
import Grid from '@mui/material/Grid';

import '../App.css'
function FlexColumn2() {
  


  return (
        <div className='FlexColumn2'>
          <div className='Management'>Management Score</div>
            
          <div className='new-flex progress '>
            <div className='p59'>
              <div className='  pcol'>
                <h3 className="col59"> 59 </h3>
              </div>
              <div className="col59 colp">Score : 59 %</div>
              
            </div>
            <div className='p59'>
              <div className='Focus Focus1'> Focus Management</div>
              <p className='Focus Focus2'>Focus Score: Focus score refers to the ability of an individual to concentrate and direct their attention towards a specific task or information.</p>
            </div>
          </div>
          <div className='line'></div>

          <div className='new-flex progress style="--i;--clr:#02BC63'>
            <div className='pcol p59 '>
              <h3 className="col59 col89"> 89 </h3>
              <div className="col59 colp">Score : 89 %</div>
            </div>
            <div className='p59'>
              <div className='Focus Focus1'> Time Management</div>
              <p className='Focus Focus2'>Time Management: Time management is the practice of planning, organizing, and allocating time to tasks and activities in a way that maximizes productivity and efficiency.</p>
            </div>
          </div>
          <div className='line'></div>
          <div className='new-flex progress style="--i;--clr:#EB5757'>
            <div className='p59 pcol'>
              <h3 className="col59 col34"> 34 </h3>
              <div className="col59 colp">Score : 34 % </div>
            </div>
            <div className='p59'>
              <div className='Focus Focus1'> Critical Thinking</div>
              <p className='Focus Focus2'>Critical thinking is the process of analyzing, evaluating, and interpreting information or situations in a logical and systematic manner.</p>
            </div>
          </div>
          <div className='line'></div>
         
        </div>
  );
}

export default FlexColumn2;