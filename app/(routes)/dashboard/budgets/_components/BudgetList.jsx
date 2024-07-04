'use client'

import React, { useEffect, useState } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { getTableColumns, sql } from 'drizzle-orm'
import { Budgets,Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

const BudgetList = () => {

  const [budgetList, setBudgetList] = useState([]);
  const {user} = useUser()
  useEffect(() => { 
    user && getBudgetList();    
  }, [user])

  // Get the list of budgets
  const getBudgetList = async () => {
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(CAST(${Expenses.amount} AS NUMERIC))`.mapWith(Number),
      TotalItem: sql`count(${Expenses.id})`.mapWith(Number),
    }).from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress ?? ''))
      .groupBy(Budgets.id);
    setBudgetList(result);
    
  }

  return (
    <div className='mt-7'>
      <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3'>
      <CreateBudget />

      </div>
    </div>
  )
}

export default BudgetList
