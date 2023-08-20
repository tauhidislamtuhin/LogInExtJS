alter PROCEDURE TotalGPA
@bangla float,
@english float,
@math float
AS

declare @total float;
declare @banglagpa float;
declare @englishgpa float;
declare @mathgpa float;

if(@bangla>=80 and @bangla<=100)
begin
set @banglagpa =5
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla>=70 and @bangla<=79)
begin
set @banglagpa =4
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla>=60 and @banglagpa<=69)
begin
set @banglagpa =3.5
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla>=50 and @bangla<=59)
begin
set @banglagpa =3
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla>=40 and @bangla<=49)
begin
set @banglagpa =2
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla>=33 and @bangla<=39)
begin
set @banglagpa =1
print 'Bangla GPA = '+ CAST(@banglagpa AS VARCHAR) 
end
else if(@bangla<=33)
begin
print 'Bangla = F'
end

--==============================================================
if(@english>=80 and @english<=100)
begin
set @englishgpa =5
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english>=70 and @english<=79)
begin
set @englishgpa =4
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english>=60 and @english<=69)
begin
set @englishgpa =3.5
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english>=50 and @english<=59)
begin
set @englishgpa =3
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english>=40 and @english<=49)
begin
set @englishgpa =2
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english>=33 and @english<=39)
begin
set @englishgpa =1
print 'English GPA = '+ CAST(@englishgpa AS VARCHAR) 
end
else if(@english<=33)
begin
print 'English = F'
end

--=======================================================

if(@math>=80 and @math<=100)
begin
set @mathgpa =5
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math>=70 and @math<=79)
begin
set @mathgpa =4
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math>=60 and @math<=69)
begin
set @mathgpa =3.5
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math>=50 and @math<=59)
begin
set @mathgpa =3
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math>=40 and @math<=49)
begin
set @mathgpa =2
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math>=33 and @math<=39)
begin
set @mathgpa =1
print 'Math GPA = '+ CAST(@mathgpa AS VARCHAR) 
end
else if(@math<33)
begin
print 'Math = F'
end


--=============================================
if(@bangla<33 or @english<33 or @math<33)
begin
print 'You Are Fail!'
end
else
begin
declare @gpa DECIMAL(10,2);
set @gpa =(@banglagpa + @englishgpa + @mathgpa)/3
print 'congratulation! Your GPA = '+ CAST(@gpa AS VARCHAR) 
end


GO
exec TotalGPA @bangla = 70 ,@english = 69,@math= 40;