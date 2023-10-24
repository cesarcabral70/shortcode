"use client"

export default function Home() {
  // - 1 and 100 DONE
  // - for DONE

  // - create function to compare numbers
  // --- Array and compare if the item is include
  // --- if is NOT return false if YES return the NUMBER

  // --- WORKING - Create function to random order the array.

  console.log("START")

  let collectionNumbers: number[] = []

  for (let index = 0; index <= 100; index++) {
    // IS A BLOCKER
    collectionNumbers = [...collectionNumbers, index]
  }

  console.log(collectionNumbers)

  function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function handleRandomOrder(data: number[]) {
    data.forEach((element: number, index: number) => {
      const isRandomNumber: number = randomNumber(0, 3)

      const removeItem = data.indexOf(element)
      data.splice(removeItem, 1)

      switch (isRandomNumber) {
        case isRandomNumber % 2:
          data.push(element)
          break

        case isRandomNumber % 3:
          data.unshift(element)
          break

        default:
          data.splice(index, 0, element)
          break
      }
    })

    return data
  }

  const newOrderNumbers = handleRandomOrder(collectionNumbers)

  console.log("FINAL", newOrderNumbers)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Numbers
    </main>
  )
}
