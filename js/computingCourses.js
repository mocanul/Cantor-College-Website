fetch("computingCourses.json")

.then(function(response){
    return response.json();
})

.then(function(courses){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let course of courses){

        if (course.NoLongerRecruiting === "true"){
            course.NoLongerRecruiting = "Yes";
        }
        else if (course.NoLongerRecruiting === "false"){
            course.NoLongerRecruiting = "No";
        }

        if (course.HasFoundationYear === "true"){
            course.HasFoundationYear = "Yes";
        }
        else if (course.HasFoundationYear === "false"){
            course.HasFoundationYear = "No";
        }

        out += `
            <tr>
                <td>${course.CourseTitle}  </td>
                <td>${course.CourseType}  </td>
                <td>${course.CourseSummary}  </td>
                <td>${course.CourseAwardName}  </td>
                <td>${course.UcasCode}  </td>
                <td>${course.UcasPoints}  </td>
                <td>${course.YearOfEntry}  </td>
                <td>${course.ModeOfAttendance}  </td>
                <td>${course.StudyLength}  </td>
                <td>${course.HasFoundationYear}  </td>
                <td>${course.CourseSubject}  </td>
                <td>${course.NoLongerRecruiting}  </td>
            </tr>
        
        `;
    }

    placeholder.innerHTML = out;
})
