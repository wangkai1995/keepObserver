
import  KeepObserver  from '../../@core/instance'
import  KeepObserverLog from '../../@core/monitor/log'
import  { KeepObserverPublic,KeepObserverMiddleWare }  from '@util/index'
import  { consoleTools }  from '@util/index'


describe("KeepObserverLog service",function(){
    //init service
    var testInstance = null
    var logInstance =  new KeepObserverLog()
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        testInstance = new KeepObserver({
            develop:true,
            runMiddleTimeOut: 3000,
            isCheckRepeatUse:false,
            projectName: 'test',
            projectVersion: 'test-version'
        })
        logInstance.startObserver()
    })


    it('KeepObserverLog api',function(){
        spyOn(logInstance,'stopObserver');
        spyOn(logInstance,'startObserver');
        testInstance.use(logInstance)
        testInstance.apis('logStart')
        testInstance.apis('logStop')
        expect(logInstance.startObserver).toHaveBeenCalled()
        expect(logInstance.stopObserver).toHaveBeenCalled()
    })


    it('keepObserverLog  send log Message',function(done){
        var receiveCount = 0;
        class ConsumerService{
            getMessage(message){
                switch(++receiveCount){
                    case 1:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`log`)
                        expect(message.data).toEqual({
                            type:'log',
                            data:'["test log",{"test":"test","test2":[1,2,3,4,5]}]'
                        })
                        expect(message.testAdd).toBe(1)
                        return
                    case 2:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`log`)
                        expect(message.data).toEqual({
                            type:'error',
                            data:'["[Window]",{"a":1,"b":"2","d":"[DomElement]","c":"[Circular]"}]'
                        })
                        expect(message.testAdd).toBe(1)
                        return
                    case 3:
                            expect(message.type).toBe(`monitor`)
                            expect(message.typeName).toBe(`log`)
                            expect(message.data).toEqual({
                                type:'error',
                                data:'["Error: 测试throw Error object"]'
                            })
                            expect(message.testAdd).toBe(1)
                            console.error('send error message')
                            setTimeout(()=>{
                                testInstance.apis('logStop')
                                done()
                            },200)
                            return
                    default:
                        fail('receive error message')
                }
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('sendMessage',(interrupt,next)=>(message)=>{
            message['testAdd'] = 1;
            next(message)
        })
        testInstance.use(logInstance)
        testInstance.use(ConsumerService)
        //after init is no Immediately catch message
        setTimeout(()=>{
            console.log('test log',{"test":"test","test2":[1,2,3,4,5]})
            let loop = {
                a:1,
                b:'2',
                d:document.createElement('div')
            }
            loop.c = loop
            console.error(window,loop)
            try{
                throw Error('测试throw Error object')
            }catch(e){
                console.error(e)
            }
        },100)
    })

    
    



});


