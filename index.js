function featureToggle(featureName,isEnabled,userGroupAccess){ 
    
        this.featureName=featureName;
        this.isEnabled=isEnabled;
        this.userGroupAccess=userGroupAccess;

    }
    featureToggle.prototype.canAcccess=function(userRole){
        return this.userGroupAccess.includes(userRole);
    }
    featureToggle.prototype.toggleFeature=function(flag){
        this.isEnabled=flag;
    }
    featureToggle.prototype.simulateAccess=function(userRole){
        if(!this.isEnabled){
            console.log(`Feature "${this.featureName}"is disabled`);
        }else if(this.canAcccess(userRole)){
            console.log(`Access granted to ${userRole}`)
        }else{
            console.log(`Access denied to ${userRole}`)
        }
    }

const feature=new featureToggle



function Timelog(freelancerName,projectDetails,logs){
        this.freelancerName=freelancerName;
        this.projectDetails=projectDetails;
        this.logs=logs;
    }
    Timelog.prototype.totalEarnings=function(){
        returnthis.logs.reduce((total,log=>total+log.hoursWorked*
            this.projectDetails.hourlyRate,0)); 
    }
    Timelog.prototype.filterLogsByDate=function(startDate,endDate){
        return this.logs.filter(log=>log.date>=startDate && log.date<=endDate);
    }
    Timelog.prototype.isOvertimeWeek=function(){
        const totalHours = this.logs.reduce((sum,log)=>sum+log.hoursWorked,0);
        if(totalHours>40){
            return true;
        }else{
            return false;
        }
    }
    const time=new Timelog



function order(customer,items,status){{
        this.customer=customer;
        this.items=items;
        this.status=status;
    }
    order.prototype.computeTotalCost=function(){
        return this.items.reduce((sum,item)=>sum+item.quality*item.unitPrice,0);
    }
    order.prototype.updateStatus=function(newStatus){
        this.status=newStatus;
    }
    order.prototype.categorizeUrgency=function(isPaid){
        switch(this.status){
         case"pending":
         returnisPaid?"normal":"urgent";
         case"shipped":
         return"low";
         case"delivered":
         return"nome"
         default:
            return"unknown";
        }
    }
}
const order= new order



class Employee{
    constructor(id,name,performanceMetrics,feedback){
        this.id=id;
        this.name=name;
        this.performanceMetrics=performanceMetrics;
        this.feedback=feedback;
    }
    averageScore(){
        const scores=Object.values(this.performanceMetrics);
        const total=scores.reduce((a,b)=>a+b,0);
        return total/scores.length;
    }
    classifyPerformance(){
        const avg=this.avarageScore();
        if(avg>=8)
            return"excellent";
        else if(avg>=5)
            return"average"
        else
        return"need improvement";
    }
    addFeedback(note){
        this.feedback.push(note);
    }     
};


function Course(title,instructor,students){{
        this.title=title;
        this.instructor=instructor;
        this.students=students;
    }
    Course.prototype.completeStudents=function(){
        return this.students.filter(s=>s.completionStatus ==="completed").map(s=>s.name);
    }
    Course.prototype.countByExpertise=function(){
        return this.students.length;
    }
    Course.prototype.instructorMessage=function(){
        const count=this.students.length;
        if(count<5){
            return "Engage more";
        }else{
            return "Keep teaching";
        }
    }
}
