[Bubble sort][1], also known as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list. Because it only uses comparisons to operate on elements, it is a comparison sort. Although the algorithm is simple, it is not efficient for sorting large lists; other algorithms are better.

The only significant advantage that bubble sort has over most other implementations, even quicksort, but not insertion sort, is that the ability to detect that the list is sorted is efficiently built into the algorithm. Performance of bubble sort over an already-sorted list (best-case) is O(n).

Pseudocode implementation

The algorithm can be expressed as:

procedure bubbleSort( A : list of sortable items )
  repeat
    swapped = false
    for i = 1 to length(A) - 1 inclusive do:
      if A[i-1] > A[i] then
        swap( A[i-1], A[i] )
        swapped = true
      end if
    end for
  until not swapped
end procedure

The bubble sort algorithm can be easily optimized by observing that the n-th pass finds the n-th largest element and puts it into its final place. So, the inner loop can avoid looking at the last n-1 items when running for the n-th time:

procedure bubbleSort( A : list of sortable items )
   n = length(A)
   repeat
      swapped = false
      for i = 1 to n-1 inclusive do
         if A[i-1] > A[i] then
            swap(A[i-1], A[i])
            swapped = true
         end if
      end for
      n = n - 1
   until not swapped
end procedure

More generally, it can happen that more than one element is placed in their final position on a single pass. In particular, after every pass, all elements after the last swap are sorted, and do not need to be checked again. This allows us to skip over a lot of the elements, resulting in about a worst case 50% improvement in comparison count (though no improvement in swap counts)

procedure bubbleSort( A : list of sortable items )
   n = length(A)
   repeat
      newn = 0
      for i = 1 to n-1 inclusive do
         if A[i-1] > A[i] then
            swap(A[i-1], A[i])
            newn = i
         end if
      end for
      n = newn
   until n = 0
end procedure


Step-by-step example

Let us take the array of numbers "5 1 4 2 8", and sort the array from lowest number to greatest number using bubble sort algorithm. In each step, elements written in bold are being compared. Three passes will be required.

First Pass:
( 5 1 4 2 8 ) \to ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps them.
( 1 5 4 2 8 ) \to ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) \to ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) \to ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
Second Pass:
( 1 4 2 5 8 ) \to ( 1 4 2 5 8 )
( 1 4 2 5 8 ) \to ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
Third Pass:
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )
( 1 2 4 5 8 ) \to ( 1 2 4 5 8 )

Algorithmic Efficiency

Although bubble sort is one of the simplest sorting algorithms to understand and implement, its O(n2) complexity means it is far too inefficient for use on lists having more than a few elements. Even among simple O(n2) sorting algorithms, algorithms like insertion sort are usually considerably more efficient.

Bubble sort is asymptotically equivalent in running time to insertion sort in the worst case, but the two algorithms differ greatly in the number of swaps necessary. Experimental results such as those of Astrachan have also shown that insertion sort performs considerably better even on random lists. For these reasons many modern algorithm textbooks avoid using the bubble sort algorithm in favor of insertion sort.




[1]:http://en.wikipedia.org/wiki/Bubble_sort, "Bubble Sort"