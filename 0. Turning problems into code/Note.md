# Turning Problem Into Code

## 1. Understand the Problem

Example to build a tip calculator:

- Question to ask :

  1. What is the formula and how the tip should be calculated?
  2. What's the tips percentage? Fix or user can modify?
  3. What should be the program display when it is start?
  4. What is the output?

- Problem statement : Create a simple tip calculator. The program should prompt
  for a bill amount and a tip rate. The program must compute
  the tip and then display both the tip and the total amount of
  the bill.

- Example output :

  > What is the bill? $200

  > What is the tip percentage? 15

  > The tip is $30.00
  >
  > The total is $230.00

## 2. Discovering Inputs, Processes, and Outputs

- Refer to problem statement above, look at the nouns and verbs. The nouns is inputs and outputs, and the verbs will be processes.

- The nouns :

  1. Bill amount
  2. Tip rate
  3. Tip
  4. Total amount

- The verbs :

  1. Prompt
  2. Compute
  3. Display

- The inputs, processes and output for this programs will be :
  1. Inputs: bill amount, tip rate
  2. Processes: calculate the tip
  3. Outputs: tip amount, total amount

## 3. Driving Design with Tests

- Example of test plan:

  1. Inputs:
     - bill amount: 10
     - tip rate: 15
  2. Expected results:
     - Tip: $1.50
     - Total: $11.50

- Insight from test plan:

  1. Program take 2 inputs: a bill amount of 10 and a tip rate of 15. So need to convert tip rate to decimal for calculation.
  2. Output of tip and total formatted as currency.

- This process of testing as a guides toward good design and helps us think about the issues our program might have.

## 4. Writing the Algorithm in Pseudocode

- Common word in pseudocode:

  - _Initialize_ - setting an initial value.
  - _Prompt_ - prompting for input.
  - _Display_ - display on the screen.

- Example pseudocode in TipCalculator:
  > TipCalculator
  >
  > > Initialize billAmount to 0
  > >
  > > Initialize tip to 0
  > >
  > > Initialize tipRate to 0
  > >
  > > Initialize total to 0
  >
  > > Prompt for billAmount with "What is the bill amount?"
  > >
  > > Prompt for tipRate with "What is the tip rate?"
  >
  > > convert billAmount to a number
  > >
  > > convert tipRate to a number
  >
  > > tip = billAmount \* (tipRate / 100)
  > >
  > > round tip up to nearest cent
  > >
  > > total = billAmount + tip
  >
  > > Display "Tip: $" + tip
  > >
  > > Display "Total: $" + total
  >
  > End

## 5. Writing the Code
