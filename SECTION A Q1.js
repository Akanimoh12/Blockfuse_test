function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0;
    let imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        const nums1LeftMax = (i === 0) ? -Infinity : nums1[i - 1];
        const nums1RightMin = (i === m) ? Infinity : nums1[i];
        
        const nums2LeftMax = (j === 0) ? -Infinity : nums2[j - 1];
        const nums2RightMin = (j === n) ? Infinity : nums2[j];

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if ((m + n) % 2 === 0) {
                return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
            } else {
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
        } else if (nums1LeftMax > nums2RightMin) {
            imax = i - 1;
        } else {
            imin = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted properly.");
}

// Example usage
console.log(findMedianSortedArrays([1, 3], [2]));      // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4]));   // Output: 2.50000