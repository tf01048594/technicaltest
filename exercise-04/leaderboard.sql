SELECT Grade.St_id,Student.st_name,Grade.Marks,Subject.Sub_name from Grade 
Left JOIN Student ON Grade.St_id = Student.st_id
LEFT JOIN Subject ON Grade.Sub_code = Subject.Sub_code
ORDER BY Grade.Marks DESC
LIMIT 10