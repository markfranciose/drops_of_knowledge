require 'thread' # requires the built-in thread library

work_q = Queue.new
# creates a Queue data structure. 

counter = 0
counter2 = 0
(0..50).to_a.each {|x| work_q.push(x)}
# push the numbers 0 - 50 onto the work_q

workers = (0...4).map do # 4 numbers into worker threads (to be created inside block)
	Thread.new do
		puts counter2 += 1	
		begin
			while x = work_q.pop(true)
				counter += 1
				50.times{print counter.to_s + " "}
			end
		rescue ThreadError
		end
	end
end; "ok"

workers.map(&:join); "ok"
