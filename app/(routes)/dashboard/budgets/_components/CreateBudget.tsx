'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from "emoji-picker-react"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { db } from '@/utils/db'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'



const CreateBudget = () => {

  const [emojiIcon, setEmojiIcon] = React.useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = React.useState(false);

  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const { user } = useUser();

  // Used to create new budget
  const onCreaterBudget = async (p0: { name: string; amount: string; emojiIcon: string }) => { 
    const result = await db.insert(Budgets)
    .values({
      name: name,
      amount: amount,
      createdBy: 'user?.primaryEmailAddress?.emailAddress',
      icon: emojiIcon,
    }).returning({ insertedId: Budgets.id })
    
    if(result) {
      toast('New Budget Created!')
      return
    }

  }

  return (
    <div>

      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className='mt-5'>
                <Button variant='outline'
                  className='text-lg'
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >{emojiIcon}</Button>
                <div className='absolute'>
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji)
                      setOpenEmojiPicker(false)
                    }}
                  />
                </div>
                <div className='mt-3'>
                  <h2 className='text-black font-medium my-1'>Budget Name</h2>
                  <Input placeholder="e.g. Home Decor"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mt-3'>
                  <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                  <Input
                    type="number"
                    placeholder="e.g. 5000"
                    onChange={(e) => setAmount(e.target.value)} />
                </div>
                <Button
                  disabled={!(name && amount)}
                  onClick={() => onCreaterBudget({ name, amount, emojiIcon })}
                  className='mt-5 w-full'>Create Budget</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateBudget
