import React from 'react'

interface Props {
  budget: BudgetType; // Replace 'BudgetType' with the actual type of 'budget'
}

interface BudgetType {
  icon: string;
  // Add other properties of the 'budget' object here
}

function BudgetItem ({budget}: Props)  {
  return (
    <div>
      <div>
        <h2>{ budget?.icon }</h2>
      </div>
    </div>
  )
}

export default BudgetItem
