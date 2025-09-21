import React,{useState} from 'react';
import styled from 'styled-components';

//Styled Components


//Main or Top Level Container
const MainDivContainer = styled.div`
    border:2px solid #ccc;
    border-bottom:none;
    border-radius:8px;
    margin:auto;

`; 

//Heading
const Heading = styled.h4`
    background-color:#ccc3;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    padding:20px;
`;

//Grouping Rows Input in a div container
const RowDivContainer = styled.div`
    background-color:${({$bgColor})=>$bgColor||'transparent'};
    display:grid;
    grid-template-columns:repeat(51,1fr);
    row-gap:10px;
    

`; 

//Grid Container
const GridContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
    padding:40px;
    gap:15px 0 ;

`;

//Styled h4
const H4Standard = styled.h4`
    grid-column:span ${(props)=>props.$size};
    text-align:${({$textAlign})=>$textAlign||'right'};
    padding:4px;
`;

//Input Styled Component
const InputStandard = styled.input`
    padding:8px;
     grid-column:span ${(props)=>props.$size};
     width:90%;
     margin:auto;
     border-radius:8px;
     border:1px solid #ccc;
    
`;

//Styled  Button Component
const ButtonRegular = styled.button`
    background-color:rgb(0,0,255);
    grid-column:span ${(props)=>props.$size||'auto'};
    border:1px solid #ccc;
    color:#fff;
    border-radius:8px;
`;

//Styled Horizontal Roller
const HorizontalRoller = styled.hr`
    border:1px solid #ccc;
    grid-column:1/-1;
    
`;

//ItemTable Component

function ItemTable({className}){

//State Object
const [Inputs,setInputs] = useState([{
    item:'',
    qty:'',
    rate:'',
    discPercent:'',
    taxPercent:''
}]);

//Event handler on change
function handleChange(e,index){
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev)=>{
        const  updated = [...prev];
        updated[index][name] = value;
        return updated;
    });
}

//Adding Another Row Dynamically
function newRow(){
    setInputs((prev)=>[
        ...prev,
        {
        item:'',
        qty:'',
        rate:'',
        discPercent:'',
        taxPercent:''
        }
    ]);

}

//Calculating Derived Values
function derivedValues(rowItems){
    const amount = rowItems.qty*rowItems.rate;
    const discAmt = (amount*rowItems.discPercent)/100;
    const taxableAmount = (amount-discAmt);
    const taxAmount = (taxableAmount*rowItems.taxPercent)/100;

    const cgst= taxAmount/2;
    const sgst= taxAmount/2;
    const igst = 0;

    const lineTotal = taxableAmount + taxAmount;

    return {amount,discAmt,cgst,sgst,igst,lineTotal};
}
  

//returning UI
return(
    <MainDivContainer className={className}>
        <Heading>Items</Heading>

        {/* Grid  Container */}
    <GridContainer>
        <RowDivContainer $bgColor='#ccc'>
            <H4Standard $size={1} $textAlign='center'>#</H4Standard>
            <H4Standard $size={10} $textAlign='center'>Items (type to search) </H4Standard>
            <H4Standard $size={3}>Qty</H4Standard>
            <H4Standard $size={3}>Rate</H4Standard>
            <H4Standard $size={4}>Amount</H4Standard>
            <H4Standard $size={3}>Disc%</H4Standard>
            <H4Standard $size={4}>Disc Amt</H4Standard>
            <H4Standard $size={3}>Tax%</H4Standard>
            <H4Standard $size={4}>CGST</H4Standard>
            <H4Standard $size={4}>SGST</H4Standard>
            <H4Standard $size={4}>IGST</H4Standard>
            <H4Standard $size={4}>Line Total</H4Standard>
        </RowDivContainer>

        {/* Creating Rows Dynamically*/ }
        {Inputs.map((rowItems,index)=>{
            const {amount,discAmt,cgst,sgst,igst,lineTotal}=derivedValues(rowItems);

            //returning the UI for input rows
            return(
            <React.Fragment  key={index}>    
            <RowDivContainer>
                <H4Standard $size={1} $textAlign='center'>{index+1}</H4Standard>
                <InputStandard $size={10} name='item' value={rowItems.item} onChange={(e)=>handleChange(e,index)}/>
                <InputStandard $size={3} type='number' name='qty' value={rowItems.qty} onChange={(e)=>handleChange(e,index)}/>
                <InputStandard $size={3} type='number'name='rate' value = {rowItems.rate} onChange={(e)=>handleChange(e,index)}/>
                <InputStandard $size={4} name='amount' value={amount}/>
                <InputStandard $size={3} type='number' name='discPercent' value={rowItems.discPercent} onChange={(e)=>handleChange(e,index)}/>
                <InputStandard $size={4} name='discAmt' value={discAmt}/>
                <InputStandard $size={3} type='number' name='taxPercent' value={rowItems.taxPercent} onChange={(e)=>handleChange(e,index)}/>
                <InputStandard $size={4} name='cgst' value={cgst}/>
                <InputStandard $size={4} name='sgst' value={sgst}/>
                <InputStandard $size={4} name='igst' value={igst}/>
                <InputStandard $size={4} name='lineTotal' value={lineTotal}/>

            {/* Dynamically inserting Add Button*/ }    
            {(index===Inputs.length-1)?
            <ButtonRegular $size={4} onClick={newRow}>Add</ButtonRegular>
            :''
            }
            <HorizontalRoller />
            
            </RowDivContainer>
            
            </React.Fragment>
            );

        })}

    </GridContainer>

    </MainDivContainer>
);


}

export default ItemTable;
